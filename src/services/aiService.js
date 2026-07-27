const API_URL =
  "https://openrouter.ai/api/v1/chat/completions";





export async function analyzeStartupIdea(idea) {



  try {



    const response = await fetch(API_URL, {



      method: "POST",



      headers: {



        "Content-Type": "application/json",



        "Authorization":
          `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`



      },





      body: JSON.stringify({



        model: "openai/gpt-4o-mini",





        response_format: {

          type: "json_object"

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



`

          },





          {

            role: "user",

            content: idea

          }





        ]



      })



    });








    if(!response.ok){



      const error =
        await response.text();



      console.error(error);



      throw new Error(
        "AI request failed"
      );


    }








    const data =
      await response.json();





    const content =
      data?.choices?.[0]?.message?.content;





    if(!content){


      throw new Error(
        "Empty AI response"
      );


    }






    const result =
      JSON.parse(content);





    return {



      score:
        result.score || 0,



      strengths:
        result.strengths || [],



      weaknesses:
        result.weaknesses || [],



      opportunities:
        result.opportunities || [],



      threats:
        result.threats || [],




      marketAnalysis:

        result.marketAnalysis || {

          targetUsers:"",
          marketDemand:"",
          competitors:[],
          growthOpportunity:""

        },





      businessStrategy:


        result.businessStrategy || {

          businessModel:"",
          monetization:"",
          growthStrategy:""

        },





      risks:

        result.risks || [],





      recommendations:

        result.recommendations || [],





      pitch:

        result.pitch || ""



    };





  }






  catch(error){





    console.error(
      "PitchPilot AI Error:",
      error
    );






    return {



      score:0,



      strengths:
        ["AI analysis failed"],



      weaknesses: [],



      opportunities: [],



      threats: [],





      marketAnalysis:{


        targetUsers:"",
        marketDemand:"",
        competitors:[],
        growthOpportunity:""


      },







      businessStrategy:{


        businessModel:"",
        monetization:"",
        growthStrategy:""


      },






      risks:[],


      recommendations:[],



      pitch:
        "Please try again."



    };



  }


}