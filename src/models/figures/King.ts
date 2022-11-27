import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import WhiteLogo from "../../assets/white-king.png";

export class King extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo;
        this.name = FigureNames.King;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        return true;
    }
}