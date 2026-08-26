import jsPDF from "jspdf";

export function generatePDF(analysis, idea) {
  const pdf = new jsPDF();

  // =====================================================
  // PAGE SETTINGS
  // =====================================================

  const PAGE_WIDTH = 210;
  const PAGE_HEIGHT = 297;

  const MARGIN_LEFT = 20;
  const MARGIN_RIGHT = 20;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

  const TOP_MARGIN = 22;
  const BOTTOM_MARGIN = 25;

  let y = 20;

  // =====================================================
  // COLORS
  // =====================================================

  const PRIMARY = [31, 122, 140];
  const DARK = [30, 30, 30];
  const MUTED = [90, 90, 90];
  const LIGHT = [245, 248, 249];

  // =====================================================
  // PAGE CHECK
  // =====================================================

  function checkPage(requiredHeight = 10) {
    if (y + requiredHeight > PAGE_HEIGHT - BOTTOM_MARGIN) {
      pdf.addPage();
      y = TOP_MARGIN;
      return true;
    }

    return false;
  }

  // =====================================================
  // TITLE
  // =====================================================

  function addTitle(title) {
    checkPage(18);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(...PRIMARY);

    const lines = pdf.splitTextToSize(
      String(title),
      CONTENT_WIDTH
    );

    pdf.text(lines, MARGIN_LEFT, y);

    y += lines.length * 7 + 5;

    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...DARK);
  }

  // =====================================================
  // TEXT
  // =====================================================

  function addText(text, options = {}) {
    if (
      text === undefined ||
      text === null ||
      String(text).trim() === ""
    ) {
      return;
    }

    const {
      fontSize = 10.5,
      lineHeight = 5.5,
      color = DARK,
      bold = false,
      spacingAfter = 5,
    } = options;

    pdf.setFont(
      "helvetica",
      bold ? "bold" : "normal"
    );

    pdf.setFontSize(fontSize);
    pdf.setTextColor(...color);

    const lines = pdf.splitTextToSize(
      String(text),
      CONTENT_WIDTH
    );

    let index = 0;

    while (index < lines.length) {
      const availableHeight =
        PAGE_HEIGHT - BOTTOM_MARGIN - y;

      const linesThatFit = Math.max(
        1,
        Math.floor(availableHeight / lineHeight)
      );

      const chunk = lines.slice(
        index,
        index + linesThatFit
      );

      pdf.text(
        chunk,
        MARGIN_LEFT,
        y
      );

      y += chunk.length * lineHeight;

      index += chunk.length;

      if (index < lines.length) {
        pdf.addPage();
        y = TOP_MARGIN;

        pdf.setFont(
          "helvetica",
          bold ? "bold" : "normal"
        );

        pdf.setFontSize(fontSize);
        pdf.setTextColor(...color);
      }
    }

    y += spacingAfter;

    pdf.setTextColor(...DARK);
  }

  // =====================================================
  // LABEL + TEXT
  // =====================================================

  function addLabel(label) {
    checkPage(12);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.5);
    pdf.setTextColor(...DARK);

    pdf.text(
      label,
      MARGIN_LEFT,
      y
    );

    y += 6;

    pdf.setFont("helvetica", "normal");
  }

  // =====================================================
  // LIST
  // =====================================================

  function addList(title, items) {
    if (
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return;
    }

    addTitle(title);

    items.forEach((item) => {
      if (
        item === undefined ||
        item === null ||
        String(item).trim() === ""
      ) {
        return;
      }

      const bullet = "•";
      const text = String(item);

      const bulletWidth = 7;
      const textWidth =
        CONTENT_WIDTH - bulletWidth;

      const lines = pdf.splitTextToSize(
        text,
        textWidth
      );

      const lineHeight = 5.5;

      let index = 0;

      while (index < lines.length) {
        const availableHeight =
          PAGE_HEIGHT - BOTTOM_MARGIN - y;

        const linesThatFit = Math.max(
          1,
          Math.floor(availableHeight / lineHeight)
        );

        const chunk = lines.slice(
          index,
          index + linesThatFit
        );

        pdf.setFont(
          "helvetica",
          "normal"
        );

        pdf.setFontSize(10.5);
        pdf.setTextColor(...DARK);

        pdf.text(
          bullet,
          MARGIN_LEFT,
          y
        );

        pdf.text(
          chunk,
          MARGIN_LEFT + bulletWidth,
          y
        );

        y += chunk.length * lineHeight;

        index += chunk.length;

        if (index < lines.length) {
          pdf.addPage();
          y = TOP_MARGIN;
        }
      }

      y += 3;
    });

    y += 3;
  }

  // =====================================================
  // HEADER
  // =====================================================

  function addHeader() {
    pdf.setFillColor(...PRIMARY);

    pdf.roundedRect(
      10,
      10,
      190,
      43,
      5,
      5,
      "F"
    );

    pdf.setTextColor(255, 255, 255);

    pdf.setFont(
      "helvetica",
      "bold"
    );

    pdf.setFontSize(23);

    pdf.text(
      "PitchPilot AI",
      20,
      29
    );

    pdf.setFont(
      "helvetica",
      "normal"
    );

    pdf.setFontSize(12.5);

    pdf.text(
      "Startup Analysis Report",
      20,
      41
    );

    pdf.setTextColor(...DARK);
  }

  // =====================================================
  // SCORE
  // =====================================================

  function addScore(score) {
    checkPage(35);

    pdf.setFont(
      "helvetica",
      "bold"
    );

    pdf.setFontSize(32);
    pdf.setTextColor(...PRIMARY);

    pdf.text(
      `${score || 0}/100`,
      MARGIN_LEFT,
      y
    );

    y += 12;

    pdf.setFont(
      "helvetica",
      "normal"
    );

    pdf.setTextColor(...DARK);
  }

  // =====================================================
  // START PDF
  // =====================================================

  addHeader();

  y = 70;

  // =====================================================
  // STARTUP IDEA
  // =====================================================

  addTitle("Startup Idea");

  addText(idea, {
    fontSize: 11,
    lineHeight: 6,
    spacingAfter: 8,
  });

  // =====================================================
  // SCORE
  // =====================================================

  addTitle("Startup Potential Score");

  addScore(analysis?.score);

  addText(
    analysis?.scoreDescription ||
      "AI evaluation based on market demand, scalability, competition, and investment potential.",
    {
      fontSize: 10.5,
      lineHeight: 5.5,
      color: MUTED,
      spacingAfter: 8,
    }
  );

  // =====================================================
  // SWOT
  // =====================================================

  addList(
    "Strengths",
    analysis?.strengths
  );

  addList(
    "Weaknesses",
    analysis?.weaknesses
  );

  addList(
    "Opportunities",
    analysis?.opportunities
  );

  addList(
    "Threats",
    analysis?.threats
  );

  // =====================================================
  // MARKET ANALYSIS
  // =====================================================

  addTitle(
    "Market Opportunity Analysis"
  );

  addLabel("Target Users:");

  addText(
    analysis?.marketAnalysis?.targetUsers
  );

  addLabel("Market Demand:");

  addText(
    analysis?.marketAnalysis?.marketDemand
  );

  addLabel("Competitors:");

  addText(
    analysis?.marketAnalysis?.competitors
  );

  addLabel("Growth Opportunity:");

  addText(
    analysis?.marketAnalysis?.growthOpportunity
  );

  // =====================================================
  // BUSINESS STRATEGY
  // =====================================================

  addTitle(
    "Business Strategy Generator"
  );

  addLabel("Business Model:");

  addText(
    analysis?.businessStrategy?.businessModel
  );

  addLabel("Monetization:");

  addText(
    analysis?.businessStrategy?.monetization
  );

  addLabel("Growth Strategy:");

  addText(
    analysis?.businessStrategy?.growthStrategy
  );

  // =====================================================
  // RISKS
  // =====================================================

  addList(
    "Risk Evaluation",
    analysis?.risks
  );

  // =====================================================
  // RECOMMENDATIONS
  // =====================================================

  addList(
    "AI Recommendations",
    analysis?.recommendations
  );

  // =====================================================
  // INVESTOR PITCH
  // =====================================================

  addTitle(
    "Investor Pitch Generator"
  );

  addText(
    analysis?.pitch,
    {
      fontSize: 10.5,
      lineHeight: 5.5,
      spacingAfter: 8,
    }
  );

  // =====================================================
  // PAGE NUMBERS
  // =====================================================

  const totalPages =
    pdf.internal.getNumberOfPages();

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {
    pdf.setPage(i);

    pdf.setFont(
      "helvetica",
      "normal"
    );

    pdf.setFontSize(8.5);

    pdf.setTextColor(
      ...MUTED
    );

    pdf.text(
      `PitchPilot AI Report  •  Page ${i} of ${totalPages}`,
      PAGE_WIDTH / 2,
      PAGE_HEIGHT - 10,
      {
        align: "center",
      }
    );
  }

  // =====================================================
  // SAVE
  // =====================================================

  pdf.save(
    "PitchPilot-AI-Startup-Report.pdf"
  );
}