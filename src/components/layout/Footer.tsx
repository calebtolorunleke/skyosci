function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-center">
      <p className="text-sm text-slate-400">
        Built by <span className="font-medium text-white">Caleb Adebayo</span>{" "}
        as part of the PM Accelerator Frontend Technical Assessment.
      </p>

      <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500">
        PM Accelerator is a professional development community that helps
        aspiring and current product managers build skills and advance their
        careers.
      </p>

      <a
        href="https://www.pmaccelerator.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-xs text-sky-400 hover:text-sky-300"
      >
        Learn more about PM Accelerator
      </a>
    </footer>
  );
}

export default Footer;
