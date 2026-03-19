import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import ListItem from "@/components/ui/ListItem/ListItem";

const textsItems = [
//   {
//     title: "Что делает анимацию правильной?",
//     description: "Перевод | 2025",
//     isNew: true,
//     linkText: "Читать ↗",
//     href: "/texts/what-makes-animation-right",
//   },
  {
    title: "Макет мечты vs Реальность кода",
    description: "Как донести дизайн до разработки и продакшена",
    linkText: "Читать ↗",
    href: "/texts/dream-layout",
  },
  {
    title: "Копируй: Как работает дизайн",
    description: "Почему копирование важно для обучения и развития",
    linkText: "Читать ↗",
    href: "/texts/copying",
  },
  {
    title: "Что такое дизайн?",
    description: "Личный поиск смысла и определения дизайна",
    linkText: "Читать ↗",
    href: "/texts/what-design-is",
  },
];

export default function ProjectsSection() {
    return (
        <section id="texts" className="innerContainer">
            <BlockHeader
                iconName="texts"
                title="Тексты"
            />
            {textsItems.map((item) => (
                <ListItem
                    key={item.title}
                    cover={item.cover}
                    title={item.title}
                    description={item.description}
                    isNew={item.isNew}
                    href={item.href}
                    linkText={item.linkText}
                />
            ))}
        </section>
    )
}
