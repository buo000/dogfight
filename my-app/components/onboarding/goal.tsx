export default function Goal() {
    return (
        <div className="flex flex-col gap-5 items-start">
            <label htmlFor="">What is your goal?</label>
            <textarea className="border-2 border-black p-3 outline-none min-h-48 max-h-48" name="" id="" maxLength={68}></textarea>
        </div>
    );
}