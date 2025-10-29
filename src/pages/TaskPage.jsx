import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/Button";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-slate-50 to-slate-400 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <Button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-white"
          >
            <ChevronLeftIcon />
          </Button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md !mt-[100px]">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
