import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"  
  import ParticleEffects from "@/components/ParticleEffects"

export default function RewardPopUp({message, type, amount}:{message: string, type: "Xp" | "Money", amount: number}){
    return (
        <Dialog>
            <DialogTrigger className="text-primary">Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-center justify-center align-middle">{message}</DialogTitle>
                <DialogDescription className="flex flex-row justify-center align-middle">
                    <ParticleEffects type={type} amount={amount}/>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

    )
}