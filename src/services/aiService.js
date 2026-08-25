const API_URL = "/.netlify/functions/analyze";

export async function analyzeStartupIdea(idea) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        idea,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error("AI request failed:", error);

      throw new Error("AI request failed");
    }

    const result = await response.json();

    return {
      score: result.score || 0,

      strengths: result.strengths || [],

      weaknesses: result.weaknesses || [],

      opportunities: result.opportunities || [],

      threats: result.threats || [],

      marketAnalysis: result.marketAnalysis || {
        targetUsers: "",
        marketDemand: "",
        competitors: [],
        growthOpportunity: "",
      },

      businessStrategy: result.businessStrategy || {
        businessModel: "",
        monetization: "",
        growthStrategy: "",
      },

      risks: result.risks || [],

      recommendations: result.recommendations || [],

      pitch: result.pitch || "",
    };
  } catch (error) {
    console.error("PitchPilot AI Error:", error);

    return {
      score: 0,

      strengths: ["AI analysis failed"],

      weaknesses: [],

      opportunities: [],

      threats: [],

      marketAnalysis: {
        targetUsers: "",
        marketDemand: "",
        competitors: [],
        growthOpportunity: "",
      },

      businessStrategy: {
        businessModel: "",
        monetization: "",
        growthStrategy: "",
      },

      risks: [],

      recommendations: [],

      pitch: "Please try again.",
    };
  }
}