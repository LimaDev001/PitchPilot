export default async (req) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const { idea } = await req.json();

    if (!idea || typeof idea !== "string") {
      return new Response(
        JSON.stringify({ error: "Idea is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },

        body: JSON.stringify({
          model: "openai/gpt-4o-mini",

          response_format: {
            type: "json_object",
          },

          messages: [
            {
              role: "system",

              content: `
You are PitchPilot AI, a professional startup coach.

Analyze the startup idea and return ONLY valid JSON.

Return exactly this structure:

{
  "score": 0,
  "strengths": [],
  "weaknesses": [],
  "opportunities": [],
  "threats": [],

  "marketAnalysis": {
    "targetUsers": "",
    "marketDemand": "",
    "competitors": [],
    "growthOpportunity": ""
  },

  "businessStrategy": {
    "businessModel": "",
    "monetization": "",
    "growthStrategy": ""
  },

  "risks": [],
  "recommendations": [],
  "pitch": ""
}

Rules:

- Score must be between 0 and 100.
- Strengths: 3-5 points.
- Weaknesses: 3-5 points.
- Opportunities: 3-5 points.
- Threats: 3-5 points.

Market Analysis:
- targetUsers: describe ideal customers.
- marketDemand: explain market need and demand.
- competitors: list competitors or alternatives.
- growthOpportunity: explain future growth potential.

Business Strategy:
- businessModel: explain how the startup creates value.
- monetization: explain how it earns money.
- growthStrategy: explain scaling strategy.

Risks:
- Provide 3-5 realistic startup risks.

Recommendations:
- Provide 3-5 practical improvements.

Pitch:
- Create a professional investor-ready pitch paragraph.

Important:
- Return ONLY JSON.
- No markdown.
- No explanations outside JSON.
`,
            },

            {
              role: "user",
              content: idea,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();

      console.error("OpenRouter error:", error);

      return new Response(
        JSON.stringify({
          error: "AI request failed",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data = await response.json();

    const content =
      data?.choices?.[0]?.message?.content;

    if (!content) {
      return new Response(
        JSON.stringify({
          error: "Empty AI response",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("PitchPilot AI Error:", error);

    return new Response(
      JSON.stringify({
        error: "Something went wrong",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};