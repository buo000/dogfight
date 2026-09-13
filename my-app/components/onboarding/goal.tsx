export default function Goal({setGoal}: {setGoal: (value: string) => void;}) {
    return (
        <div className="flex flex-col gap-5 items-start">
            <label htmlFor="">What is your goal?<small>dont yap</small></label>
            <textarea onChange={(e) => setGoal(e.target.value)} className="border-2 border-black p-3 outline-none min-h-48 max-h-48" name="" id="" maxLength={68} placeholder={"become a\ncompetent and job\nready full stack\nweb developer"}></textarea>
        </div>
    );
}