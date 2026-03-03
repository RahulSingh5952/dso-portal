export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Contact Us
      </h1>
      <p className="mt-6 text-slate-400">
        Reach out to the Division of Student Organizations for support, queries,
        or feedback.
      </p>
      <div className="mt-8 space-y-4">
        <div>
          <h3 className="font-medium text-white">Email</h3>
          <p className="text-slate-400">dso@university.edu</p>
        </div>
        <div>
          <h3 className="font-medium text-white">Phone</h3>
          <p className="text-slate-400">+1 (555) 123-4567</p>
        </div>
        <div>
          <h3 className="font-medium text-white">Office</h3>
          <p className="text-slate-400">Student Affairs Building, Room 101</p>
        </div>
      </div>
    </section>
  );
}
