import {useForm} from "react-hook-form";

import {createUsers} from "../../services";

const Users = () => {

    const {register, handleSubmit,formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email@email'
        }
    });

    const submit = (obj) => {
        createUsers(obj).then(result => console.log(result));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" {...register('name', {required: true})}/>
                {
                    errors.name && <span> field is required </span>
                }
                <input type="text" {...register('username')}/>
                <input type="email"{...register('email')}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export {Users};