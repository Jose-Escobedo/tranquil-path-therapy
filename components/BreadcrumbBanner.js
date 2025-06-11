import Link from "next/link";

export default function BreadcrumbBanner({ crumbs = [] }) {

  return (
    <div className="bg-[#111827] mt-25 py-6 px-6 text-center text-white shadow-md">
      <nav aria-label="breadcrumb" className="inline-block text-sm font-medium text-gray-300">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <span key={idx} className="inline-flex items-center">
              {!isLast && crumb.href ? (
                <>
                  <Link href={crumb.href} className="hover:text-yellow-400 transition-colors">
                    {crumb.label}
                  </Link>
                  <svg
                    className="w-4 h-4 mx-2 fill-current text-white-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M7.05 4.05a.75.75 0 011.06 1.06L5.56 8.62H16a.75.75 0 010 1.5H5.56l2.55 3.51a.75.75 0 11-1.06 1.06l-4.5-6a.75.75 0 010-1.06l4.5-6z" />
                  </svg>
                </>
              ) : (
                <span className="text-white font-semibold">{crumb.label}</span>
              )}
            </span>
          );
        })}
      </nav>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{crumbs[crumbs.length - 1]?.label}</h1>
    </div>
  );
}
