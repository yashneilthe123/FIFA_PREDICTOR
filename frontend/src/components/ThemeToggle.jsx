import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

    const {

        darkMode,

        toggleTheme

    } = useTheme();

    return (

        <button

            onClick={toggleTheme}

            className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"

        >

            {

                darkMode

                ?

                "☀ Light"

                :

                "🌙 Dark"

            }

        </button>

    );

}

export default ThemeToggle;