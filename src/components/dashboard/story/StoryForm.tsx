import { InputWithLabel } from "../basic/Input";

export function StoryForm() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Create a New Story</h1>
      <p className="text-lg text-muted-foreground mt-2">
        Tell us about a project you've worked on.
      </p>

      {/* The form will be connected to a Server Action later */}
      <form className="mt-8 space-y-6">
        <div>
          <InputWithLabel
            label="Title of the project."
            id="title"
            placeholder="e.g., Optimizing the Real-Time Data Pipeline"
          />
        </div>

        <div>
          {/* We will replace this with the Tiptap editor later */}
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-200"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Describe the problem, your role, the process, and the outcome..."
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center rounded-full brand py-2 px-4 text-sm font-medium text-white transition-all duration-150 hover:scale-105"
        >
          Create Story
        </button>
      </form>
    </div>
  );
}
