import { InputWithLabel } from "../basic/Input";

export function StoryForm() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold font-['Syne']">Create a New Story</h1>
      <p className="text-xl text-muted-foreground mt-2">
        Tell us about a project you've worked on.
      </p>

      {/* The form will be connected to a Server Action later */}
      <form className="mt-8 space-y-6">
        <div>
          <InputWithLabel
            label="Title of the project :"
            id="title"
            type="text"
            placeholder="e.g., Optimizing the Real-Time Data Pipeline"
          />
        </div>

        <div>
          {/* We will replace this with the Tiptap editor later */}
          <label
            htmlFor="content"
            className="block text-md font-medium mb-2 text-gray-200"
          >
            Content :
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            className="flex w-full rounded-lg border-2 border-white/40 p-6 text-base text-white placeholder:text-neutral-400 outline-none"
            placeholder="Describe the problem, your role, the process, and the outcome..."
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center rounded-full brand py-2 px-4 text-sm font-medium text-white transition-all duration-150 hover:scale-105"
        >
          Next
        </button>
      </form>
    </div>
  );
}
