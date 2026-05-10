import Breadcrumbs from "./Breadcrumbs";

interface CategoryHeaderProps {
  title: string;
  description: string;
  color: string;
  breadcrumbItems: { label: string; href?: string }[];
}

export default function CategoryHeader({ title, description, color, breadcrumbItems }: CategoryHeaderProps) {
  return (
    <section className={`relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden`}>
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 -z-10`} />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 font-poppins mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
