import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
export interface NavItem {
	label: string
	href?: string
	children?: NavItem[]
}

interface DropdownMenuProps {
	open: string
	routes: NavItem[]
}

function renderMenuItem(item: NavItem) {
	// Agar sub menu bo‘lsa
	if (item.children && item.children.length > 0) {
		return (
			<DropdownMenuSub key={item.label}>
				<DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
				<DropdownMenuPortal>
					<DropdownMenuSubContent>
						{item.children.map(renderMenuItem)}
					</DropdownMenuSubContent>
				</DropdownMenuPortal>
			</DropdownMenuSub>
		)
	}

	// Oddiy menu item
	return (
		<DropdownMenuItem key={item.label} asChild>
			<Link href={item.href ?? '#'}>{item.label}</Link>
		</DropdownMenuItem>
	)
}

export function DropdownMenuDemo({ open, routes }: DropdownMenuProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='link'
					className='text-white font-bold decoration-2 text-lg'
				>
					{open}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='start' className='w-64'>
				<DropdownMenuGroup>{routes.map(renderMenuItem)}</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
