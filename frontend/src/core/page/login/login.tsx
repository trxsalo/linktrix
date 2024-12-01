import {Link} from "react-router-dom";

export const Login =  ()=>  {
    return <>
        <div className={' bg-blue-950  min-h-screen'}>
            <p className={' text-4xl font-semibold max-w-xl text-amber-50 mx-auto'}>{`</>Linktrix`}</p>
        </div>
        <nav>
            <Link to={'/auth/register'}>
               Aun no tiene una cuenta? Registrate aqui.
            </Link>
        </nav>
    </>
}