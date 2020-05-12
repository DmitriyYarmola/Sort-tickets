import React from 'react'
import './OptionTikets.sass'

type PropsType = {
    SearchOption: (e:React.ChangeEvent<HTMLInputElement>) => void
}
export const OptionTickets:React.FC<PropsType> = ({SearchOption}) => {
    return (
        <div className="optionTickets">
            <span className="block-name">Количество пересадок</span>
            <div className="option-item">
                <label>
                    <input type="checkbox"  name="allTransplants" onChange={SearchOption}/>
                    <span>Все</span>
                </label>
            </div>
            <div className="option-item">
                <label>
                    <input type="checkbox" name="withoutTransplants" onChange={SearchOption}/>
                    <span>Без пересадок</span>
                </label>
            </div>
            <div className="option-item">
                <label>
                    <input type="checkbox" name="oneTransplant" onChange={SearchOption}/>
                    <span>1 Пересадка</span>
                </label>
            </div>
            <div className="option-item">
                <label>
                    <input type="checkbox" name="twoTransplants" onChange={SearchOption}/>
                    <span>2 Пересадки</span>
                </label>
            </div>
            <div className="option-item">
                <label>
                    <input type="checkbox" name="threeTransplants" onChange={SearchOption}/>
                    <span>3 Пересадки</span>
                </label>
            </div>
        </div>
    )
}