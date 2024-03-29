import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Container } from "../../components";
import { Input } from "../../components/common/input/Input";
import { MdStar } from 'react-icons/md'




function AddProjectModal(){
    const { handleSubmit, register } = useForm();
    
    const log = (data) => console.log(data)
    return (
    <Container className="max-w-7xl mx-auto">
        <Dialog
        open={isOpen}
        onClose={() => null}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-secondary-500 p-8 text-white">
            <Dialog.Title className="text-3xl font-bold text-center uppercase mb-8">Adicionar Projeto</Dialog.Title>
            <Dialog.Description className="flex flex-col text-center items-center gap-4">
                Adicione links para o seu Portfolio
            </Dialog.Description>

            <Container>
                <form onSubmit={handleSubmit(log)}>
                    <Input
                        containerClassName="mt-4"
                        labelClassName="text-white font-bold"
                        labelText="Nome do Projeto"
                        id="title"
                        type="text"
                        {...register('title')}
                    />
                    <Input
                        containerClassName="mt-4"
                        labelText="URL do Projeto"
                        labelClassName="text-white font-bold"
                        id="title"
                        type="text"
                        {...register('url')}
                    />

                    <Button
                        fullWidth
                        className="mt-6 bg-primary-500 hover:bg-primary-800"
                        type="submit"
                        onClick={() => null}
                    > Adicionar</Button>
                </form>
                
            </Container>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Container>
    )
}

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="flex gap-x-4 justify-center">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              className="p-2"
              type="button"
              key={index}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">
                <MdStar color={index <= (hover || rating) ? "yellow" : "white"}/>
                </span>
            </button>
          );
        })}
      </div>
    );
  };
  


export default function Drawboard(){
    const isOpen = true;

    const { handleSubmit, register } = useForm();
    
    const log = (data) => console.log(data)
    return (
    <Container className="max-w-7xl mx-auto">
        <Dialog
        open={isOpen}
        onClose={() => null}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-secondary-500 p-8 text-white">
            <Dialog.Title className="text-3xl font-bold text-center uppercase mb-8">Avaliar Projeto</Dialog.Title>
            <Dialog.Description className="flex flex-col text-center items-center gap-4">
                Conte sua experiência com o trabalho do tradutor
            </Dialog.Description>

            <Container>
                <form onSubmit={handleSubmit(log)}>

                    <StarRating />
                    <textarea
                        className="block w-full mt-4 h-40 pb-10 border focus:border-white border-white bg-transparent resize-none"
                        {...register('bio')}
                    />
                    <Button
                        fullWidth
                        className="mt-6 bg-primary-500 hover:bg-primary-800"
                        type="submit"
                        onClick={() => null}
                    > Avaliar
                    </Button>
                </form>
                
            </Container>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Container>
    )
}