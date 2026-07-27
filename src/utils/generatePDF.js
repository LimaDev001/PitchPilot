import jsPDF from "jspdf";


export function generatePDF(analysis, idea) {


  const pdf = new jsPDF();


  let y = 20;



  function checkPage(){

    if(y > 270){

      pdf.addPage();

      y = 20;

    }

  }



  function addTitle(title){


    checkPage();


    pdf.setFontSize(18);

    pdf.setTextColor(31,122,140);


    pdf.text(
      title,
      20,
      y
    );


    y += 10;


    pdf.setTextColor(0,0,0);


  }




  function addText(text){


    if(!text) return;


    checkPage();


    pdf.setFontSize(11);


    const lines =
      pdf.splitTextToSize(
        String(text),
        170
      );


    pdf.text(
      lines,
      20,
      y
    );


    y += lines.length * 6 + 5;


  }




  function addList(title,items){


    addTitle(title);


    if(!items) return;


    items.forEach(item=>{


      addText(
        "✓ " + item
      );


    });


    y += 5;


  }



  pdf.setFillColor(
    31,
    122,
    140
  );


  pdf.roundedRect(
    10,
    10,
    190,
    45,
    5,
    5,
    "F"
  );



  pdf.setTextColor(
    255,
    255,
    255
  );


  pdf.setFontSize(24);


  pdf.text(
    "PitchPilot AI",
    20,
    30
  );


  pdf.setFontSize(14);


  pdf.text(
    "Startup Analysis Report",
    20,
    42
  );



  pdf.setTextColor(
    0,
    0,
    0
  );



  y = 75;



  // IDEA


  addTitle(
    "Startup Idea"
  );


  addText(
    idea
  );



  // SCORE


  addTitle(
    "Startup Potential Score"
  );


  pdf.setFontSize(35);


  pdf.text(
    `${analysis.score || 0}/100`,
    20,
    y
  );


  y += 15;


  addText(
    analysis.scoreDescription ||
    "AI evaluation based on market demand, scalability, competition, and investment potential."
  );




  // SWOT


  addList(
    "Strengths",
    analysis.strengths
  );


  addList(
    "Weaknesses",
    analysis.weaknesses
  );


  addList(
    "Opportunities",
    analysis.opportunities
  );


  addList(
    "Threats",
    analysis.threats
  );





  // MARKET ANALYSIS


  addTitle(
    "Market Opportunity Analysis"
  );


  addText(
    "Target Users:"
  );


  addText(
    analysis.marketAnalysis?.targetUsers
  );



  addText(
    "Market Demand:"
  );


  addText(
    analysis.marketAnalysis?.marketDemand
  );



  addText(
    "Competitors:"
  );


  addText(
    analysis.marketAnalysis?.competitors
  );



  addText(
    "Growth Opportunity:"
  );


  addText(
    analysis.marketAnalysis?.growthOpportunity
  );










  // BUSINESS STRATEGY


  addTitle(
    "Business Strategy Generator"
  );



  addText(
    "Business Model:"
  );


  addText(
    analysis.businessStrategy?.businessModel
  );



  addText(
    "Monetization:"
  );


  addText(
    analysis.businessStrategy?.monetization
  );



  addText(
    "Growth Strategy:"
  );


  addText(
    analysis.businessStrategy?.growthStrategy
  );









  // RISKS


  addList(
    "Risk Evaluation",
    analysis.risks
  );









  // RECOMMENDATIONS


  addList(
    "AI Recommendations",
    analysis.recommendations
  );





  // INVESTOR PITCH


  addTitle(
    "Investor Pitch Generator"
  );


  addText(
    analysis.pitch
  );





  const pages =
    pdf.internal.getNumberOfPages();



  for(
    let i=1;
    i<=pages;
    i++
  ){

    pdf.setPage(i);


    pdf.setFontSize(10);


    pdf.text(
      `PitchPilot AI Report | Page ${i}`,
      20,
      290
    );

  }






  pdf.save(
    "PitchPilot-AI-Startup-Report.pdf"
  );


}