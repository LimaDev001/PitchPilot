import { Save, Check } from "lucide-react";
import { useState, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

const SaveAnalysis = forwardRef(
  ({ startupIdea, analysis }, ref) => {
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);

    async function saveAnalysis() {
      if (!analysis) {
        alert("No analysis available.");
        return false;
      }

      if (!startupIdea?.trim()) {
        alert("Please enter a startup idea.");
        return false;
      }

      setLoading(true);

      try {
        // Get existing analyses
        const existingAnalyses = JSON.parse(
          localStorage.getItem("analyses") || "[]"
        );

        // Create new analysis
        const newAnalysis = {
          id: Date.now().toString(),

          idea: startupIdea,

          swot_report: JSON.stringify({
            strengths: analysis.strengths || [],
            weaknesses: analysis.weaknesses || [],
            opportunities: analysis.opportunities || [],
            threats: analysis.threats || [],
          }),

          market_analysis: JSON.stringify(
            analysis.marketAnalysis || {}
          ),

          business_strategy: JSON.stringify(
            analysis.businessStrategy || {}
          ),

          risks: JSON.stringify(
            analysis.risks || []
          ),

          recommendations: JSON.stringify(
            analysis.recommendations || []
          ),

          investor_pitch: analysis.pitch || "",

          confidence: Number(
            analysis.score || 0
          ),

          created_at: new Date().toISOString(),
        };

        // Add new analysis
        existingAnalyses.unshift(newAnalysis);

        // Save to LocalStorage
        localStorage.setItem(
          "analyses",
          JSON.stringify(existingAnalyses)
        );

        setSaved(true);

        setTimeout(() => {
          setSaved(false);
        }, 2000);

        return true;
      } catch (error) {
        console.error(error);
        alert("Save failed.");
        return false;
      } finally {
        setLoading(false);
      }
    }

    // Allows NewAnalysis auto save
    useImperativeHandle(ref, () => ({
      saveAnalysis,
    }));

    return (
      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={saveAnalysis}
        disabled={loading}
        title={
          loading
            ? "Saving..."
            : saved
            ? "Saved"
            : "Save Analysis"
        }
        className="
          w-12
          h-12
          rounded-full
          bg-[#1F7A8C]
          hover:bg-[#022B3A]
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          transition
          disabled:opacity-50
        "
      >
        {saved ? (
          <Check size={24} />
        ) : (
          <Save size={24} />
        )}
      </motion.button>
    );
  }
);

export default SaveAnalysis;