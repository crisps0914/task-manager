import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);

  const handleAddTask = (title: string) => {
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-sm shadow-lg p-6">
          <div className="flex items-center gap-3 mb-8">
            <img src="./src/assets/images/logo.png" width="32" height="32" alt="" />
            <h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>
          </div>

          <AddTaskForm onAdd={handleAddTask} />

          {loading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}

          <TaskList
            tasks={tasks}
            onToggle={() => { }}
            onDelete={() => { }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
