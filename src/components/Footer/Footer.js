import {ReactComponent as Vk} from './img/vk1.svg';
import {ReactComponent as Gh} from './img/gh.svg';
import {ReactComponent as Tg} from './img/tg.svg';


const Footer = () => {

    return (<div className={'flex items-center justify-center bg-secondary_light dark:bg-secondary_dark h-[70px]'}>
        <footer className={'grid grid-cols-[repeat(3,50px)_250px] gap-2 items-center justify-center font-sans-serif'}>
        <a  className={'self-center place-self-center'}
            href='https://vk.com/gorgeous_george90'>
            <Vk width={'2em'} className={'cursor-pointer hover:fill-amber-200 fill-neutral-100'}/>
        </a>
        <a  className={'place-self-center'}
            href='https://t.me/MrStandart90'>
            <Tg width={'2.8em'} className={'cursor-pointer hover:fill-amber-200 fill-neutral-100'}/>
        </a>
        <a className={'place-self-center'}
            href='https://github.com/GorgeousGeorge90'>
            <Gh className={'cursor-pointer hover:fill-amber-200 fill-neutral-100 scale-125'}/>
        </a>
        <p className={'text-neutral-100 place-self-center'}><i>check my GH for other works</i></p>
    </footer>
</div>)
}

export default Footer