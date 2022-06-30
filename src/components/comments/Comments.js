import {useForm} from "react-hook-form";

import {createComments} from "../../services";

const Comments = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            email: 'email@email',
            body: 'body'
        }
    });

    const submit = (obj) => {
        createComments(obj).then(({data}) => console.log(data));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})}/>
                {
                    errors.name && <span> field is required </span>
                }
                <input type="email" {...register('email')}/>
                <input type="text" {...register('body')}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export {Comments};