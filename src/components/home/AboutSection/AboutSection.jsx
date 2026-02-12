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
                    Сейчас я в{" "}
                    <MorphText>
                        <a href="https://sirena.team" className="link" target="_blank">
                            Сирене↗
                        </a>
                    </MorphText>
                    , креативной инхаус-студии внутри{" "}
                    <MorphText>
                        <a href="https://sports.ru/" className="link" target="_blank">
                            Спортса↗
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
                    занимался дизайном, арт-дирстом и развитием дизайн-команды.
                </p>
            </Reveal>
            <Reveal>
                <p className="text">Стремлюсь стать дизайн-инженером. Изучил HTML+CSS+Vanilla JS. Изучаю Typescript и React+Redux.</p>
            </Reveal>
            <Reveal>
                <p className="text">Я люблю дизайн.</p>
            </Reveal>
        </section>
    )
}
