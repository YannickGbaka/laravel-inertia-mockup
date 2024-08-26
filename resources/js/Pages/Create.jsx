import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, errors, post, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <>
            <h1 className="title">Create post link</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        onChange={(e) => setData("body", e.target.value)}
                        name=""
                        id=""
                        className={errors.body && "!ring-red-500"}
                        rows={10}
                    ></textarea>
                    {errors.body && (
                        <span className="error">{errors.body}</span>
                    )}
                    <button disabled={processing} className="mt-2 primary-btn">
                        Create post
                    </button>
                </form>
            </div>
        </>
    );
}
