'use client'

import { Button } from '@/components/Button'
import { css } from '@/styled-system/css'
import { Dialog, DialogRoot } from '@/components/Modals/Modal'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Input } from '@/components/Forms/Input'

export default function Home() {
  return (
    <>
      <header className={css({ p: '8', bg: 'purple.300' })}>
        <p className={css({ w: '160px', ml: 'auto' })}>This is a header</p>
      </header>
      <Input type="name" />
      <div className={css({ p: '8' })}>
        <DialogRoot>
          <DialogTrigger asChild>
            <Button intent="primary" size="md">
              Open modal
            </Button>
          </DialogTrigger>
          <Dialog
            title="Hello Panda"
            description="This is a modal built with Radix and pandacss"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              aut eaque vitae provident, quidem earum veritatis ab ad voluptas
              aliquam cumque architecto rerum, blanditiis magnam laborum
              temporibus esse dolore reprehenderit! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veritatis qui delectus eius
              inventore, non maiores maxime error placeat neque ex optio?
              Laboriosam assumenda, iusto consequatur iure temporibus odio eaque
              exercitationem? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus laboriosam minus cum. Architecto,
              autem ratione quod ab delectus ducimus. Omnis, ullam iure optio
              laudantium sapiente dicta aspernatur culpa dolores odit! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Quis, natus
              porro! Perspiciatis cum est deserunt et sapiente modi aperiam at
              architecto repudiandae! Molestias, excepturi? Repellendus veniam
              eveniet vitae perspiciatis culpa!
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              aut eaque vitae provident, quidem earum veritatis ab ad voluptas
              aliquam cumque architecto rerum, blanditiis magnam laborum
              temporibus esse dolore reprehenderit! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veritatis qui delectus eius
              inventore, non maiores maxime error placeat neque ex optio?
              Laboriosam assumenda, iusto consequatur iure temporibus odio eaque
              exercitationem? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus laboriosam minus cum. Architecto,
              autem ratione quod ab delectus ducimus. Omnis, ullam iure optio
              laudantium sapiente dicta aspernatur culpa dolores odit! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Quis, natus
              porro! Perspiciatis cum est deserunt et sapiente modi aperiam at
              architecto repudiandae! Molestias, excepturi? Repellendus veniam
              eveniet vitae perspiciatis culpa!
            </p>
          </Dialog>
        </DialogRoot>
        <div
          className={css({
            maxW: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8',
          })}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            aut eaque vitae provident, quidem earum veritatis ab ad voluptas
            aliquam cumque architecto rerum, blanditiis magnam laborum
            temporibus esse dolore reprehenderit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis qui delectus eius inventore,
            non maiores maxime error placeat neque ex optio? Laboriosam
            assumenda, iusto consequatur iure temporibus odio eaque
            exercitationem? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatibus laboriosam minus cum. Architecto, autem ratione
            quod ab delectus ducimus. Omnis, ullam iure optio laudantium
            sapiente dicta aspernatur culpa dolores odit! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quis, natus porro! Perspiciatis
            cum est deserunt et sapiente modi aperiam at architecto repudiandae!
            Molestias, excepturi? Repellendus veniam eveniet vitae perspiciatis
            culpa!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            aut eaque vitae provident, quidem earum veritatis ab ad voluptas
            aliquam cumque architecto rerum, blanditiis magnam laborum
            temporibus esse dolore reprehenderit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis qui delectus eius inventore,
            non maiores maxime error placeat neque ex optio? Laboriosam
            assumenda, iusto consequatur iure temporibus odio eaque
            exercitationem? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatibus laboriosam minus cum. Architecto, autem ratione
            quod ab delectus ducimus. Omnis, ullam iure optio laudantium
            sapiente dicta aspernatur culpa dolores odit! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quis, natus porro! Perspiciatis
            cum est deserunt et sapiente modi aperiam at architecto repudiandae!
            Molestias, excepturi? Repellendus veniam eveniet vitae perspiciatis
            culpa!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            aut eaque vitae provident, quidem earum veritatis ab ad voluptas
            aliquam cumque architecto rerum, blanditiis magnam laborum
            temporibus esse dolore reprehenderit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis qui delectus eius inventore,
            non maiores maxime error placeat neque ex optio? Laboriosam
            assumenda, iusto consequatur iure temporibus odio eaque
            exercitationem? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatibus laboriosam minus cum. Architecto, autem ratione
            quod ab delectus ducimus. Omnis, ullam iure optio laudantium
            sapiente dicta aspernatur culpa dolores odit! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quis, natus porro! Perspiciatis
            cum est deserunt et sapiente modi aperiam at architecto repudiandae!
            Molestias, excepturi? Repellendus veniam eveniet vitae perspiciatis
            culpa!
          </p>
        </div>
      </div>
    </>
  )
}
