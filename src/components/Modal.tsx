import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "./ui/dialog";

export default function Modal({
	isOpen,
	onOpenChange,
}: {
	isOpen: boolean;
	onOpenChange: () => void;
}) {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Here&#39;s your quiz!</DialogTitle>
					<DialogDescription>Fill in the blank</DialogDescription>
				</DialogHeader>
				<p>
					This app is ______ <br />
					&nbsp;&nbsp;&nbsp;&nbsp;A. Sweet <br />
					&nbsp;&nbsp;&nbsp;&nbsp;B. Cool <br />
					&nbsp;&nbsp;&nbsp;&nbsp;C. Sick <br />
					&nbsp;&nbsp;&nbsp;&nbsp;D. All of the above (hint: yes)
				</p>
				<DialogFooter>
					<Button>Previous</Button>
					<Button>Next</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
