import type { NextPage } from 'next'
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Layout from '../components/layout';

const image = "/event/schwimmausstieg.jpg";

const Kategorien: NextPage = () => {
  return (
    <Layout>
      <div className="content">
        <h1 className="h1">Kategorien</h1>
        <h2 className="h2 width">
          Mit den insgesamt 7 Kategorien kommen an der DSS alle auf ihre Kosten. Start und Ziel sind bei allen Kategorien am Strandbad des Hüttwilersees.
        </h2>
      </div>

      <div className="content-wide">
        <div className="relative w-full h-60 sm:h-80 md:h-[30rem]">
          <Image
            objectFit="cover"
            objectPosition={"center"}
            layout={'fill'}
            className="image"
            src={'/fotos/slider/16.jpg'}
            alt="People working on laptops"
          />
        </div>
      </div>

      <div className="content grid sm:grid-cols-2 gap-12 md:gap-24 mb-12 md:mb-32">
        <div className="grid content-start">
          <h4 className="h4">Triathlon</h4>
          <p className="p">
            Bist du Triathlon-Neuling oder für kurze Distanzen geboren?
            Dann ist die Short Distance für dich.
            Für Routiniers oder wenn du dich challengen möchtest, ist die Olympic Distance etwas für dich.
          </p>
          <ul className="list-disc list-inside text-gray-800">
            <li>Short Distance</li>
            <li>Olympic Distance</li>
          </ul>
          <div className="mt-8">
            <Link href="/triathlon">
              <div className="button-inverse group">
                Mehr Infos <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid content-start">
          <h4 className="h4">Stafette</h4>
          <p className="p">
            Möchstest du als Team reüssieren, deinen Teamgeist stärken oder dich mit Kollegen challengen?
            Die Stafetten-Kategorien bieten dir eine super Möglichkeit dazu - egal ob beim Schwimmen, Velofahren, Laufen, Biken oder (optional) Reiten.
          </p>
          <ul className="list-disc list-inside text-gray-800">
            <li>Stafette kurz</li>
            <li>Stafette kurz mit Reiter</li>
            <li>Stafette lang</li>
          </ul>
          <div className="mt-8">
            <Link href="/stafette">
              <div className="button-inverse group">
                Mehr Infos <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid content-start">
          <h4 className="h4">Diä schnellste Seebachtaler:inne</h4>
          <p className="p">
            Unser Angebot für die Jüngeren: am Nachmittag laufen die Kinder und Jugendlichen auf 40m (KiGa) und 80m (PS/Sek) um die Wette.
            Im Ausscheidungsverfahren über mehrere Läufe wird der/die schnellste Seebachter:in erkoren.
          </p>
          <div className="">
            <Link href="/seebachtaler">
              <div className="button-inverse group">
                Mehr Infos <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid content-start">
          <h4 className="h4">Lauf</h4>
          <p className="p">
            Kein Velo oder die Schwimmbrille verloren?
            Kein Problem - du kannst die 3-Seen-Region auch beschwingten Fusses entdecken.
            Die Strecke von 10.55 km führt durch die wunderschöne und vielfältige Seenlandschaft.
          </p>
          <div className="">
            <Link href="/lauf">
              <div className="button-inverse group">
                Mehr Infos <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Kategorien;
