import { Logo } from "../Logo/Logo";

export function Header() {
    return (
        <header className="flex items-center justify-center border-b  border-gray-800">            
            <Logo/>                  
        </header>
    );
}

