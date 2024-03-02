import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className='p-1 flex justify-between items-center bg-black border-b-2 border-pink-700'>
        <div>
          <Image src='/logo.webp' alt='Vercel Logo' width={288} height={112} />
        </div>
        <div className='flex flex-wrap'>
          <Button asChild className=''>
            <Link href='/inicio'>inicio</Link>
          </Button>
          <Button asChild variant='ghost' className=''>
            <Link href='/nosotros'>nosotros</Link>
          </Button>
          <Button asChild variant='ghost' className=''>
            <Link href='/productos'>productos</Link>
          </Button>
          <Button asChild variant='ghost' className=''>
            <Link href='/distribudores'>distribudores</Link>
          </Button>
          <Button asChild variant='ghost' className=''>
            <Link href='/contacto'>contacto</Link>
          </Button>
        </div>
      </header>
      <main className=''>
        <Carousel className='w-full'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className='w-full flex bg-[url(/bg.webp)] bg-no-repeat bg-cover items-center'>
                  <div className='w-8/12 h-[45rem]' />
                  <div>
                    <Image
                      src='/texto.webp'
                      alt='texto Logo'
                      width={484}
                      height={338}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant='ghost' />
          <CarouselNext variant='ghost' />
        </Carousel>
        <section className='flex justify-around flex-wrap pt-5 bg-white text-black items-center px-12 gap-3'>
          <div className='flex flex-col items-center max-w-52 gap-5'>
            <Image src='/bolsa.webp' alt='bolsa Logo' width={81} height={112} />
            <h2 className='w-full'>Tienda en línea</h2>
            <p>
              Todo nuestro catálogo de productos online disponible solo para tí.
            </p>
            <div className='mx-auto mt-10'>
              <Button className=''>
                Leer más{' '}
                <span className='rounded-full bg-slate-600 px-1'>+</span>
              </Button>
            </div>
          </div>

          <div className='w-0.5 h-60 rounded-full bg-slate-700' />

          <div className='flex flex-col items-center max-w-52 gap-5'>
            <Image
              src='/portasfolio.webp'
              alt='bolsa Logo'
              width={115}
              height={94}
            />
            <h2 className='w-full mt-4'>Trabajemos</h2>
            <p>
              Conviértete en un distribuidor autorizado en tu región, trabajemos
              juntos
            </p>
            <div className='mx-auto mt-8'>
              <Button className=''>
                Leer más{' '}
                <span className='rounded-full bg-slate-600 px-1'>+</span>
              </Button>
            </div>
          </div>

          <div className='w-0.5 h-60 rounded-full bg-slate-700' />

          <div className='flex flex-col items-center max-w-52 gap-5'>
            <Image
              src='/Capa 10.webp'
              alt='bolsa Logo'
              width={186}
              height={99}
            />
            <h2 className='w-full'>Descuentos</h2>
            <p>Conoce beneficios y descuentos pensados solo para tí.</p>
            <div className='mx-auto mt-10'>
              <Button className=''>
                Leer más{' '}
                <span className='rounded-full bg-slate-600 px-1'>+</span>
              </Button>
            </div>
          </div>

          <div className='w-0.5 h-60 rounded-full bg-slate-700' />

          <div className='flex flex-col items-center max-w-52 gap-5'>
            <Image src='/logo.webp' alt='bolsa Logo' width={171} height={66} />
            <h2 className='w-full mt-10'>Nosotros</h2>
            <p>Enterate de todo lo que tenemos planeado para tí.</p>
            <div className='mx-auto mt-16'>
              <Button className=''>
                Leer más{' '}
                <span className='rounded-full bg-slate-600 px-1'>+</span>
              </Button>
            </div>
          </div>
        </section>
        <section className='bg-white flex flex-wrap justify-between text-black px-12'>
          <div className='xl:w-1/2 w-full flex flex-col gap-8  p-10'>
            <div>
              <h1>Quiénes somos</h1>
              <p>
                Somos una empresa de confección de ropa interior de la ciudad de
                Medellín, somos innovadores y comprometidos con nuestro trabajo
                donde brindamos lo mejor de nosotros a cada uno de nuestros
                clientes.
              </p>
            </div>
            <div>
              <h1>Lo que nos gusta hacer</h1>
              <p>
                Trabajar con pasión y empeño pr darles a nuestros clientes lo
                mejor de nuestro talento para satisfacer sus necesidades.
              </p>
            </div>
            <div className='flex'>
              <span className='text-9xl text-slate-700'>“</span>
              <span className='italic'>
                “La originalidad no consiste en decir cosas nuevas, sino en
                decirlas como si nunca hubiesen sido dichas por otro.
                Suspendisse et tortor! Fusce cursus egestas velit.
              </span>
            </div>
          </div>

          <div className='xl:w-1/2 w-full flex flex-col gap-8 p-10'>
            <div>
              <h1>Vendedoras estrella</h1>
              <p>
                Estas son algunas de nuestras vendedoras estrella en Colombia,
                tu también puedes estar en este lugar.
              </p>
            </div>
            <div className='flex justify-between items-center flex-wrap'>
              <div className='flex flex-col items-center'>
                <div className='w-[106px] h-[107px]'>
                  <Image
                    src='/heidy.webp'
                    alt='heidy Logo'
                    width={86}
                    height={87}
                    className='border-2 border-black !w-full !h-full'
                  />
                </div>
                <span>Heydi Milena Rua</span>
                <Image src='/123.webp' alt='Logo' width={86} height={87} />
              </div>

              <div className='flex flex-col items-center'>
                <div className='w-[106px] h-[107px]'>
                  <Image
                    src='/erica.webp'
                    alt='heidy Logo'
                    width={86}
                    height={87}
                    className='border-2 border-black !w-full !h-full'
                  />
                </div>
                <span>Erika Durán</span>
                <Image src='/123.webp' alt='Logo' width={86} height={87} />
              </div>

              <div className='flex flex-col items-center'>
                <div className='w-[106px] h-[107px]'>
                  <Image
                    src='/Capa 14.webp'
                    alt='heidy Logo'
                    width={86}
                    height={87}
                    className='border-2 border-black !w-full !h-full'
                  />
                </div>
                <span>Lía Pimienta</span>
                <Image src='/123.webp' alt='Logo' width={86} height={87} />
              </div>

              <div className='flex flex-col items-center'>
                <div className='w-[106px] h-[107px]'>
                  <Image
                    src='/15.webp'
                    alt='heidy Logo'
                    width={86}
                    height={87}
                    className='border-2 border-black !w-full !h-full'
                  />
                </div>
                <span>Lía Pimienta</span>
                <Image src='/123.webp' alt='Logo' width={86} height={87} />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white pb-16'>
          <div className='bg-pink-600 w-11/12 mx-auto p-6 relative pl-20'>
            <Image
              src='/twitter icono.webp'
              alt='twitter Logo'
              width={70}
              height={70}
              className='absolute -left-3'
            />
            <p className='text-black'>
              Bésame sigue cambiando la vida de muchas mujeres en Colombia,
            </p>
            <p className='italic'>
              About 10 hours ago. from <span className='underline'>Web</span>
            </p>
            <Image
              src='/t.webp'
              alt='twitter Logo'
              width={70}
              height={70}
              className='absolute -top-3 right-[16rem]'
            />
            <Image
              src='/in.webp'
              alt='twitter Logo'
              width={70}
              height={70}
              className='absolute -top-3 right-[11rem]'
            />
            <Image
              src='/f.webp'
              alt='twitter Logo'
              width={70}
              height={70}
              className='absolute -top-3 right-24'
            />
            <Image
              src='/fr.webp'
              alt='twitter Logo'
              width={70}
              height={70}
              className='absolute -top-3 right-[1rem]'
            />
          </div>
        </section>

        <section className='flex justify-between p-5 px-12 pb-12 flex-wrap pt-10'>
          <div>
            <div className=''>
              <h1>Hablemos</h1>
              <p>Envíanos tus inquietudes acerca de nosotros</p>
            </div>
            <form className='w-5/6 flex flex-col gap-6 mt-6'>
              <Input placeholder='Nombre' />
              <Input placeholder='E-mail' />
              <Textarea placeholder='Comentarios' />
              <div>
                <Button className=''>Enviar!</Button>
              </div>
            </form>
          </div>
          <div>
            <div className='mb-4'>
              <h1>Testimonios</h1>
              <p>Algunos comentarios de nuestras vendedoras</p>
            </div>
            <div className='flex flex-col gap-4'>
              <div>
                <b>Martha Loaiza</b>
                <p>Agosto 17th 2011</p>
                <p className=' text-pink-500'>
                  Bésame me llevó a la independencia.
                </p>
              </div>
              <div>
                <b>Lía Janeth Sepúlveda</b>
                <p>Agosto 19th 2010</p>
                <p className=' text-pink-500'>
                  Con Bésame he aumentado mis ingresos.
                </p>
              </div>
              <div>
                <b>Juana Jiménez</b>
                <p>Septiembre 6 2010</p>
                <p className=' text-pink-500'>Ahora soy toda una empresaria.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='mb-4'>
              <h1>Liderazgo</h1>
              <p>Sigue las actualizaciones de nuestro blog</p>
            </div>
            <div className='flex flex-col gap-4'>
              <div>
                <b className=' text-pink-500'>
                  Mujeres libres e independientes
                </b>
                <p>01.5.2010</p>
                <p>
                  Aún recuerdo aquellos días cuando las mujeres buscaban ropa
                  femenina.
                </p>
              </div>
              <div>
                <b className=' text-pink-500'>
                  Un negocio que funciona en casa
                </b>
                <p>20.12.2009</p>
                <p>
                  Existen muchas opciones de negocios que puedes realizar desde
                  tu casa.
                </p>
              </div>
              <div className='flex justify-end'>
                <Button className=''>Leer más {'>'}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex justify-between p-12 border-t-2'>
        <p>
          Pragma - 2011 - <b className='text-pink-500'>Besame.com</b> - Todos
          los derechos reservados
        </p>
        <div className='flex space-x-2 flex-wrap'>
          <Link href='/inicio' className=' text-pink-500'>
            inicio
          </Link>
          <Link href='/nosotros'>nosotros</Link>
          <Link href='/productos'>productos</Link>
          <Link href='/distribuidores'>distribuidores</Link>
          <Link href='/contacto'>Contacto</Link>
        </div>
      </footer>
    </div>
  );
}
