
import { Button } from "@/components/ui/button";

export const ROICallToAction = () => {
  return (
    <div className="mt-12 text-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to Achieve These Results?
        </h3>
        <p className="text-white/90 mb-6">
          See how LegisClear's RAG technology can deliver these savings and efficiency gains for your practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Detailed ROI Report"}
            className="bg-white text-[#0A2F51] hover:bg-gray-100 px-8 py-3 border-2 border-white"
          >
            Download Detailed ROI Report
          </Button>
        </div>
      </div>
    </div>
  );
};
