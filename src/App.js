import './App.css';
import Characters from "./components/Characters";


function App() {
    return (
        <div>
            <Characters
                name={`Барт Симпсон`}
                desc={`Бартоломью "Барт" ДжоДжо/Джей Симпсон (1 апреля 1979) (запланированное имя – Морт Симпсон) (англ. Bart Simspon) – озорной и "особо опасный" сын Гомера и Мардж Симпсон, является старшим братом Лизы и Мэгги. Так же Барт известен как "Эль Барто" и "Бартмен". После обнаружения кометы в эпизоде "Комета Барта" получил прозвище Космо. Целая серия комиксов с одноименным названием (ранее англ. Simpsons Comics Presents Bart Simpson) посвящены Барту. Барт создан по подобию юного Мэтта Грейнинга и его брата Марка.`}
                picture={`https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png`}
                alt={'Барт'}
            />

            <Characters
                name={`Гомер Симпсон`}
                desc={`Гомер Джей Симпсон старший (англ. Homer Jay Simpson, Sr.) (род. 10 мая 1950 cудя по разным сериям) – один из главных героев сериала. Глава семьи имеет избыточный вес, ленив, туповат, но при всех недостатках показан преданным и любящим отцом и мужем (особенно в первых сезонах).`}
                picture={`https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png`}
                alt={'Гомер'}
            />

            <Characters
                name={`Мардж Симпсон`}
                desc={`Марджори "Мардж" Жаклин Симпсон (англ. Marjorie Jacqueline "Marge" Simpson) (в девичестве Бувье) (англ. Bouvier) — жена Гомера и мать их троих детей: Барта, Лизы и Мэгги. Рождена 19 Марта 1955. Мардж часто не упускает возможности сделать замечание в своей семье, также часто можно услышать, как она ворчит во время какой-либо из выходок семьи, стараясь поддержать порядок в доме Симпсонов. Помимо своих обязанностей по дому, Мардж иногда занимается другими профессиями, делая себе карьеру. Например, она была полицейским, чтобы бороться с насилием на улицах. Участвует в некоторых народных инициативах и известна в городе, как женщина, говорящая веское слово в защиту благодетелей и традиций.`}
                picture={`https://static.wikia.nocookie.net/simpsons/images/0/0b/Marge_Simpson.png`}
                alt={'Мардж'}
            />

            <Characters
                name={`Лиза Симпсон`}
                desc={`Лиза Симпсон (род. 9 мая 1981) – харизматичная восьмилетняя девочка с очень высоким уровнем интеллекта, средний ребенок в семье Симпсонов, один из главных героев сериала. Является духовным центром семьи. Лизе постоянно не хватает родительского внимания Гомера и Мардж, из-за чего она погружается в увлечения: игра на саксофоне и гитаре, катание на лошадях и уход за ними, интерес к занятиям в науке, охрана природы и постоянная борьба за чьи-нибудь права и собственное признание. В школе популярность Лизы зависит от мнения её сверстников, а они, считая ее сверхпреуспевающей, постоянно занижают ее, таким образом у нее остается всего несколько друзей. Лиза Симпсон является остроумной и независимой девочкой, которая сосредотачивает весь свой потенциал на достижении целей.`}
                picture={`https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png`}
                alt={'Лиза'}
            />

            <Characters
                name={`Абрахам Симпсон II`}
                desc={`Абрахам Джей Симпсон родился в семье Орвилла Симпсона и Юмы Хикмен. Когда его семья иммигрировала в США, первое время они жили внутри головы Статуи Свободы, во всяком случае так об этом рассказывает он сам (23 серия 7 сезона). Затем Эйб жил в Олбани, штат Нью-Йорк, где, как он говорит, его признали «самым симпатичным парнем». Во время Первой мировой войны он вступил в Армию США, солгав о своём возрасте.`}
                picture={`https://static.wikia.nocookie.net/simpsons/images/c/c5/Abraham_Simpson_-_shading.png`}
                alt={'Абрахам'}
            />
        </div>
    );
}

export default App;
