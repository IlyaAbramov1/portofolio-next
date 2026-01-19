import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "@/components/ui/MorphText/MorphText"

export default function AboutSection() {
    return (
        <section id="aboutMe" className="innerContainer">
            <BlockHeader 
                iconName="about_me"
                title="Обо мне"
            />
            <Reveal>
                <p className="text">Я — Илья. Дизайнер веба, графики и два-дэ моушна.</p>
            </Reveal>
            <Reveal>
                <p className="text">
                    Сейчас я в креативной студии{" "}
                    <MorphText>
                        <a href="https://sirena.sports.ru/" className="link" target="_blank">
                            Сирена↗
                        </a>
                    </MorphText>
                    , делаем проекты для{" "}
                    <MorphText>
                        <a href="https://sports.ru/" className="link" target="_blank">
                            Спортс↗
                        </a>
                    </MorphText>
                    . Ранее 3 года в самарской сети{" "}
                    <MorphText>
                        <a href="https://dodopizza.ru/samara" className="link" target="_blank">
                            Додо↗
                        </a>
                    </MorphText>{" "}
                    и агентстве{" "}
                    <MorphText>
                        <a href="http://tomat.team/" className="link" target="_blank">
                            Томат↗
                        </a>
                    </MorphText>{" "}
                    занимался дизайном, арт-дирстом и развитием дизайн-команды. Еще я
                    окончил вуз на ракетостроение, постоянно учусь, учу в{" "}
                    <MorphText>
                        <a href="https://www.gohelper.io/" className="link" target="_blank">
                            Хелпере↗
                        </a>
                    </MorphText>
                    .
                </p>
            </Reveal>
            <Reveal>
                <p className="text">«Учу» — это я говорю без пафоса. Учеба — это необходимость, как мне кажется. Спустя 6 лет работы я пришёл к инженерии и коду, потому что дизайн для меня — это не просто картинка. Это система. Это логика. Это идея, которая оживает и становится частью чего-то большего.</p>
            </Reveal>
            <Reveal>
                <p className="text">Я люблю дизайн. Всем сердцем. А ещё люблю литературу и музыку. Люблю переслушивать её и открывать новое. Это крутое чувство. Такое же чувство хочу передавать своей работой.</p>
            </Reveal>
        </section>
    )
}
