import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-pawn.png";
import WhiteLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo;
        this.name = FigureNames.PAW;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        return true;
    }
}