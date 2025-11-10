import { useId, useState } from "react";

import EyeIcon from "./../../assets/IconsNewSvgs/passwordShow.svg";
import EyeOffIcon from "../../assets/IconsNewSvgs/passwordHide.svg";

import { Button } from "./button.tsx";
import { Input } from "./input.tsx";
import { Label } from "./label.tsx";

const InputPassword = () => {
  const [isVisible, setIsVisible] = useState(false);

  const id = useId();

  return (
    <div className="w-[90vw] max-w-[600px]">
      <Label htmlFor={id}>putaria</Label>
      <div className="relative">
        <Input
          id={id}
          type={isVisible ? "text" : "password"}
          placeholder="penis "
          className="pr-9"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible((prevState) => !prevState)}
          className="b"
        >
          <img
            src={isVisible ? EyeIcon : EyeOffIcon}
            alt={isVisible ? "Mostrar a senha " : "Esconder a Senha"}
            className=""
          />

          <span className="sr-only">
            {isVisible ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default InputPassword;
