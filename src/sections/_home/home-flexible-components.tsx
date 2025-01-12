import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Consultoria Tributária",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Contabilidade",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Auditoria Fiscal e Contábil",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
    icon: ArrowPathIcon,
  },
  {
    name: "Contratos Artísticos",
    description:
      "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
    icon: FingerPrintIcon,
  },
  {
    name: "Blindagem Patrimonial",
    description:
      "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Recuperação de Empresas",
    description:
      "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    icon: ServerIcon,
  },
  {
    name: "Offshore no Exterior",
    description:
      "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    icon: ServerIcon,
  },
  {
    name: "Marcas e Patentes",
    description:
      "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    icon: ServerIcon,
  },
];

export function HomeFlexibleComponents() {
  return (
    <div className="bg-inherit py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-blue-700">
            As melhores estratégias
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Nossos serviços você encontra aqui
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
            perferendis suscipit eaque, iste dolor cupiditate blanditiis.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300  sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative pl-9 border-solid border border-gray-600 border-opacity-50 py-5 rounded-lg hover:bg-gray-800 hover:bg-opacity-70"
            >
              <dt className="inline font-semibold text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-6 text-blue-700 mt-5"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline opacity-70">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
