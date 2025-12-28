"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { AspectRatio } from "./ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { Button } from "./ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./ui/button-group"
import { Calendar } from "./ui/calendar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"
import { Checkbox } from "./ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "./ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "./ui/field"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "./ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp"
import { Input } from "./ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./ui/item"
import { Kbd, KbdGroup } from "./ui/kbd"
import { Label } from "./ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Progress } from "./ui/progress"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "./ui/sidebar"
import { Skeleton } from "./ui/skeleton"
import { Slider } from "./ui/slider"
import { Toaster } from "./ui/sonner"
import { Spinner } from "./ui/spinner"
import { Switch } from "./ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Textarea } from "./ui/textarea"
import { Toggle } from "./ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts"

const chartData = [
  { month: "Jan", risk: 62, vendors: 24 },
  { month: "Feb", risk: 48, vendors: 38 },
  { month: "Mar", risk: 71, vendors: 28 },
  { month: "Apr", risk: 55, vendors: 44 },
  { month: "May", risk: 68, vendors: 31 },
  { month: "Jun", risk: 50, vendors: 40 },
]

const chartConfig = {
  risk: { label: "Risk Score", color: "var(--chart-1)" },
  vendors: { label: "Vendors", color: "var(--chart-2)" },
}

const pieData = [
  { name: "Critical", value: 18, fill: "var(--chart-1)" },
  { name: "Moderate", value: 34, fill: "var(--chart-2)" },
  { name: "Low", value: 48, fill: "var(--chart-3)" },
]

const pieConfig = {
  Critical: { label: "Critical", color: "var(--chart-1)" },
  Moderate: { label: "Moderate", color: "var(--chart-2)" },
  Low: { label: "Low", color: "var(--chart-3)" },
}

const tableRows = [
  { feature: "Continuous monitoring", status: "Active", coverage: "100%" },
  { feature: "Evidence automation", status: "Active", coverage: "92%" },
  { feature: "Vendor scoring", status: "In Progress", coverage: "78%" },
  { feature: "Workflow approvals", status: "Planned", coverage: "40%" },
]

const carouselItems = [
  "Automated evidence packs",
  "Real-time exposure scoring",
  "Vendor tiering workflows",
  "Risk posture forecasting",
]

const ShowcaseCard = ({ title, description, children, className }) => {
  const baseClass =
    "rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm"
  const classes = `${baseClass} ${className ?? ""}`.trim()

  return (
    <div className={classes}>
      <div className="mb-4 space-y-1">
        <h4 className="text-lg font-semibold">{title}</h4>
        {description ? (
          <p className="text-sm text-foreground/60">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default function ComponentShowcase() {
  const [calendarDate, setCalendarDate] = useState(new Date())
  const form = useForm({
    defaultValues: {
      email: "",
      company: "",
    },
  })

  return (
    <section id="components" className="border-t border-border py-24">
      <Toaster />
      <TooltipProvider delayDuration={200}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">
              UI Library
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Complete component showcase
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Every interface building block in the PREVAIA system, organized by
              use case and ready to ship.
            </p>
          </div>

          <div className="space-y-16">
            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Controls</h3>
                <p className="text-sm text-foreground/60">
                  Actions, toggles, and stateful inputs.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard
                  title="Buttons"
                  description="Variants, sizing, and grouped actions."
                >
                  <div className="flex flex-wrap gap-3">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex flex-wrap items-center gap-3">
                    <ButtonGroup>
                      <Button size="sm">Week</Button>
                      <Button size="sm" variant="secondary">
                        Month
                      </Button>
                      <Button size="sm" variant="outline">
                        Quarter
                      </Button>
                    </ButtonGroup>
                    <ButtonGroupText>Auto-rotate</ButtonGroupText>
                    <ButtonGroupSeparator />
                    <Button size="sm" variant="outline">
                      Enable
                    </Button>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Toggles"
                  description="Single and grouped toggle states."
                >
                  <div className="flex flex-wrap gap-3">
                    <Toggle aria-label="Toggle grid">Grid</Toggle>
                    <Toggle variant="outline" aria-label="Toggle alerts">
                      Alerts
                    </Toggle>
                    <Toggle variant="outline" aria-label="Toggle sync">
                      Sync
                    </Toggle>
                  </div>
                  <div className="mt-4">
                    <ToggleGroup type="single" defaultValue="risk">
                      <ToggleGroupItem value="risk">Risk</ToggleGroupItem>
                      <ToggleGroupItem value="vendors">Vendors</ToggleGroupItem>
                      <ToggleGroupItem value="reports">Reports</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Checks & Switches"
                  description="Binary and single-choice inputs."
                >
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="monitoring">Live monitoring</Label>
                      <Switch id="monitoring" defaultChecked />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="alerts" defaultChecked />
                      <Label htmlFor="alerts">Send alerts</Label>
                    </div>
                    <RadioGroup defaultValue="standard" className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="standard" value="standard" />
                        <Label htmlFor="standard">Standard</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="strict" value="strict" />
                        <Label htmlFor="strict">Strict</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Slider & Progress"
                  description="Continuous values and completion status."
                >
                  <div className="space-y-4">
                    <Slider defaultValue={[72]} max={100} step={1} />
                    <Progress value={68} />
                  </div>
                </ShowcaseCard>
              </div>
            </section>
            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Inputs & Forms</h3>
                <p className="text-sm text-foreground/60">
                  Text entry, structured forms, and fieldsets.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard
                  title="Inputs"
                  description="Single-line, multi-line, grouped, and OTP fields."
                >
                  <div className="grid gap-4">
                    <Input placeholder="Vendor name" />
                    <Textarea placeholder="Risk summary..." rows={3} />
                    <InputGroup>
                      <InputGroupAddon>
                        <InputGroupText>https://</InputGroupText>
                      </InputGroupAddon>
                      <InputGroupInput placeholder="prevaia.ai" />
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton variant="ghost">
                          Go
                        </InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Select & Labels"
                  description="Select menus and keyboard hints."
                >
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="region">Region</Label>
                      <Select defaultValue="global">
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="global">Global</SelectItem>
                          <SelectItem value="emea">EMEA</SelectItem>
                          <SelectItem value="americas">Americas</SelectItem>
                          <SelectItem value="apac">APAC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-border/60 bg-background/80 px-3 py-2 text-sm text-foreground/70">
                      <span>Quick search</span>
                      <KbdGroup>
                        <Kbd>Ctrl</Kbd>
                        <Kbd>K</Kbd>
                      </KbdGroup>
                    </div>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Form"
                  description="React Hook Form integration."
                >
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit((values) =>
                        toast("Request sent", {
                          description: `We will reach out at ${values.email}.`,
                        })
                      )}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="security@company.com"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Use a shared inbox for audit updates.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit request</Button>
                    </form>
                  </Form>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Field Groups"
                  description="Structured fieldsets with contextual help."
                >
                  <FieldSet>
                    <FieldLegend>Alert routing</FieldLegend>
                    <FieldGroup>
                      <Field orientation="horizontal">
                        <FieldLabel htmlFor="routing-email">
                          Email channel
                        </FieldLabel>
                        <FieldContent>
                          <Switch id="routing-email" defaultChecked />
                          <FieldDescription>
                            Send critical events to the security inbox.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field orientation="horizontal">
                        <FieldLabel htmlFor="routing-slack">
                          Slack channel
                        </FieldLabel>
                        <FieldContent>
                          <Switch id="routing-slack" />
                          <FieldDescription>
                            Route updates to #vendor-risk.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <FieldTitle>Fallback</FieldTitle>
                      <FieldError
                        errors={[{ message: "Select at least one channel." }]}
                      />
                    </FieldGroup>
                  </FieldSet>
                </ShowcaseCard>
              </div>
            </section>
            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Data Display & Layout
                </h3>
                <p className="text-sm text-foreground/60">
                  Cards, tables, lists, and layout utilities.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard
                  title="Cards & Badges"
                  description="Containers and status tokens."
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Risk Posture
                        <Badge variant="secondary">Stable</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">
                        Monitoring 162 vendors with automated evidence refresh.
                      </p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                        Updated 2m ago
                      </span>
                      <Button size="sm" variant="outline">
                        View report
                      </Button>
                    </CardFooter>
                  </Card>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Tables"
                  description="Structured data with captions."
                >
                  <Table>
                    <TableCaption>
                      Coverage across automation workflows.
                    </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Coverage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tableRows.map((row) => (
                        <TableRow key={row.feature}>
                          <TableCell>{row.feature}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>{row.coverage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Tabs"
                  description="Switchable content panes."
                >
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="mb-4 w-full">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="signals">Signals</TabsTrigger>
                      <TabsTrigger value="actions">Actions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                      <p className="text-sm text-foreground/70">
                        A unified vendor risk command view.
                      </p>
                    </TabsContent>
                    <TabsContent value="signals">
                      <p className="text-sm text-foreground/70">
                        Active alerts, evidence gaps, and anomalies.
                      </p>
                    </TabsContent>
                    <TabsContent value="actions">
                      <p className="text-sm text-foreground/70">
                        Automate outreach, approvals, and remediation.
                      </p>
                    </TabsContent>
                  </Tabs>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Accordion & Collapsible"
                  description="Expandable content stacks."
                >
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    className="mb-4"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Policy coverage</AccordionTrigger>
                      <AccordionContent>
                        18 global controls mapped to your vendor program.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Evidence freshness</AccordionTrigger>
                      <AccordionContent>
                        Auto-refreshing SOC2 and ISO artifacts.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Collapsible defaultOpen>
                    <CollapsibleTrigger className="text-sm font-medium">
                      Show audit trail
                    </CollapsibleTrigger>
                    <CollapsibleContent className="text-sm text-foreground/70 mt-2">
                      12 vendor approvals recorded in the last 24 hours.
                    </CollapsibleContent>
                  </Collapsible>
                </ShowcaseCard>
                <ShowcaseCard
                  title="Avatars & Aspect Ratio"
                  description="Identity and media utilities."
                >
                  <div className="flex flex-wrap gap-6 items-center">
                    <Avatar>
                      <AvatarImage src="/images/gdpr.webp" alt="GDPR" />
                      <AvatarFallback>GD</AvatarFallback>
                    </Avatar>
                    <AspectRatio
                      ratio={16 / 9}
                      className="w-full max-w-xs overflow-hidden rounded-lg border border-border/60"
                    >
                      <div className="h-full w-full bg-linear-to-br from-primary/20 via-background to-primary/10" />
                    </AspectRatio>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Breadcrumb & Pagination"
                  description="Navigation affordances."
                >
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbEllipsis />
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Risk</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <Separator className="my-4" />
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Item List"
                  description="Stacked items with media and actions."
                >
                  <ItemGroup>
                    <Item>
                      <ItemHeader>
                        <ItemTitle>Omega Logistics</ItemTitle>
                        <Badge variant="outline">Tier 1</Badge>
                      </ItemHeader>
                      <ItemMedia variant="icon">R</ItemMedia>
                      <ItemContent>
                        <ItemDescription>
                          SOC2 evidence pending review.
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </ItemActions>
                    </Item>
                    <ItemSeparator />
                    <Item>
                      <ItemHeader>
                        <ItemTitle>Venture Cloud</ItemTitle>
                        <Badge variant="secondary">Tier 2</Badge>
                      </ItemHeader>
                      <ItemMedia variant="icon">V</ItemMedia>
                      <ItemContent>
                        <ItemDescription>
                          Monitoring coverage at 88%.
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button size="sm" variant="outline">
                          Open
                        </Button>
                      </ItemActions>
                    </Item>
                  </ItemGroup>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Skeletons & Empty States"
                  description="Loading and no-data components."
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-40" />
                      </div>
                      <Spinner className="ml-auto" />
                    </div>
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">!</EmptyMedia>
                        <EmptyTitle>No incidents found</EmptyTitle>
                        <EmptyDescription>
                          All vendor controls are up to date.
                        </EmptyDescription>
                      </EmptyHeader>
                      <EmptyContent>
                        <Button size="sm">Create alert</Button>
                      </EmptyContent>
                    </Empty>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Scroll Area"
                  description="Scrollable content with custom bars."
                >
                  <ScrollArea className="h-40 rounded-md border border-border/60">
                    <div className="p-3 space-y-2 text-sm text-foreground/70">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <div
                          key={`log-${index}`}
                          className="rounded-md border border-border/40 bg-background/80 px-3 py-2"
                        >
                          Audit log entry #{index + 1}
                        </div>
                      ))}
                    </div>
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Resizable Panels"
                  description="Split surfaces with adjustable sizing."
                >
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="min-h-35 rounded-lg border border-border/60"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center text-sm text-foreground/70">
                        Signals
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center text-sm text-foreground/70">
                        Evidence
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Carousel"
                  description="Scrollable highlight strips."
                >
                  <Carousel className="w-full max-w-sm">
                    <CarouselContent>
                      {carouselItems.map((item) => (
                        <CarouselItem key={item}>
                          <div className="rounded-lg border border-border/60 bg-background/80 p-4 text-sm text-foreground/70">
                            {item}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </ShowcaseCard>
              </div>
            </section>
            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Overlays & Navigation
                </h3>
                <p className="text-sm text-foreground/60">
                  Dialogs, menus, navigation, and notifications.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard
                  title="Alerts & Confirmation"
                  description="Status messaging and destructive actions."
                >
                  <div className="space-y-4">
                    <Alert>
                      <AlertTitle>Monitoring active</AlertTitle>
                      <AlertDescription>
                        12 new vendor signals detected in the last hour.
                      </AlertDescription>
                    </Alert>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline">Archive vendor</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Archive vendor?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This removes the vendor from active monitoring.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Archive</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Dialog Surfaces"
                  description="Dialog, sheet, and drawer patterns."
                >
                  <div className="flex flex-wrap gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Open dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Vendor note</DialogTitle>
                          <DialogDescription>
                            Log a quick note for the audit trail.
                          </DialogDescription>
                        </DialogHeader>
                        <Textarea rows={3} placeholder="Add a note..." />
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                          <Button>Save</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Open sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Evidence pack</SheetTitle>
                          <SheetDescription>
                            Export the latest compliance evidence.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="mt-4 space-y-2 text-sm text-foreground/70">
                          <p>ISO 27001, SOC2, GDPR mappings.</p>
                          <p>Updated 7 minutes ago.</p>
                        </div>
                        <SheetFooter className="mt-6">
                          <SheetClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </SheetClose>
                          <Button>Export</Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>

                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button variant="outline">Open drawer</Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Assign reviewer</DrawerTitle>
                          <DrawerDescription>
                            Select a reviewer for this vendor.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="px-4 pb-4 space-y-2 text-sm text-foreground/70">
                          <div className="rounded-md border border-border/60 px-3 py-2">
                            Lila B. (Security)
                          </div>
                          <div className="rounded-md border border-border/60 px-3 py-2">
                            Marcus D. (Compliance)
                          </div>
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                          <Button>Assign</Button>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Popover, Hover, Tooltip"
                  description="Contextual overlays."
                >
                  <div className="flex flex-wrap gap-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent className="text-sm text-foreground/70">
                        Signal drift detected in vendor score.
                      </PopoverContent>
                    </Popover>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="outline">Hover card</Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="text-sm text-foreground/70">
                        Last audit completed 3 days ago.
                      </HoverCardContent>
                    </HoverCard>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Tooltip</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>Quick actions</span>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Dropdown & Context Menus"
                  description="Right-click and dropdown menus."
                >
                  <div className="flex flex-wrap gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Dropdown</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Open vendor</DropdownMenuItem>
                        <DropdownMenuItem>Generate report</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <ContextMenu>
                      <ContextMenuTrigger className="rounded-md border border-border/60 bg-background/80 px-4 py-2 text-sm text-foreground/70">
                        Right click me
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Duplicate</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Remove</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </div>
                </ShowcaseCard>
                <ShowcaseCard
                  title="Menubar & Navigation Menu"
                  description="Top-level navigation patterns."
                >
                  <div className="space-y-4">
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger>File</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>
                            New workspace
                            <MenubarShortcut>Ctrl+N</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem>Open evidence</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Close</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                      <MenubarMenu>
                        <MenubarTrigger>View</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>Dashboard</MenubarItem>
                          <MenubarItem>Workflows</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>

                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Platform
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid gap-2 p-3 md:w-70">
                              <NavigationMenuLink
                                href="#"
                                className={navigationMenuTriggerStyle()}
                              >
                                Vendor scoring
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className={navigationMenuTriggerStyle()}
                              >
                                Evidence automation
                              </NavigationMenuLink>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="#"
                            className={navigationMenuTriggerStyle()}
                          >
                            Security
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                      <NavigationMenuIndicator />
                      <NavigationMenuViewport />
                    </NavigationMenu>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Command Palette"
                  description="Searchable command surface."
                >
                  <Command className="rounded-lg border border-border/60">
                    <CommandInput placeholder="Search commands..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Quick actions">
                        <CommandItem>
                          Open vendor
                          <CommandShortcut>Enter</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                          Generate report
                          <CommandShortcut>Ctrl+R</CommandShortcut>
                        </CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="Navigation">
                        <CommandItem>Risk dashboard</CommandItem>
                        <CommandItem>Compliance map</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Toast Notifications"
                  description="Inline notifications via Sonner."
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm text-foreground/70">
                      Trigger a toast for real-time feedback.
                    </div>
                    <Button
                      variant="outline"
                      onClick={() =>
                        toast("Vendor updated", {
                          description: "Latest risk score synced.",
                        })
                      }
                    >
                      Send toast
                    </Button>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Sidebar"
                  description="Inset layout with collapsible nav."
                  className="lg:col-span-2"
                >
                  <SidebarProvider
                    defaultOpen
                    className="relative min-h-90 w-full rounded-xl border border-border/60 overflow-hidden bg-background/80"
                  >
                    <Sidebar
                      variant="inset"
                      collapsible="icon"
                      className="absolute"
                    >
                      <SidebarHeader className="px-3 py-4">
                        <div className="text-sm font-semibold">
                          PREVAIA Ops
                        </div>
                      </SidebarHeader>
                      <SidebarSeparator />
                      <SidebarContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton isActive>
                              Overview
                            </SidebarMenuButton>
                            <SidebarMenuBadge>3</SidebarMenuBadge>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>Vendors</SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>Reports</SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarContent>
                      <SidebarFooter className="px-3 py-4 text-xs text-foreground/60">
                        Secure workspace
                      </SidebarFooter>
                    </Sidebar>
                    <SidebarInset>
                      <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                          <SidebarTrigger />
                          <span className="text-sm text-foreground/70">
                            Vendor workspace
                          </span>
                        </div>
                        <div className="p-4 text-sm text-foreground/70">
                          Review alerts, open workflows, and audit evidence in a
                          unified sidebar layout.
                        </div>
                      </div>
                    </SidebarInset>
                  </SidebarProvider>
                </ShowcaseCard>
              </div>
            </section>
            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Calendar & Charts
                </h3>
                <p className="text-sm text-foreground/60">
                  Scheduling and data visualization.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                <ShowcaseCard
                  title="Calendar"
                  description="Date selection for scheduling."
                >
                  <Calendar
                    mode="single"
                    selected={calendarDate}
                    onSelect={setCalendarDate}
                    className="rounded-lg border border-border/60"
                  />
                </ShowcaseCard>

                <ShowcaseCard
                  title="Bar Chart"
                  description="Snapshot risk and vendor volumes."
                >
                  <ChartContainer
                    config={chartConfig}
                    className="h-65 w-full"
                  >
                    <BarChart data={chartData} margin={{ top: 12, right: 12 }}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar
                        dataKey="risk"
                        fill="var(--color-risk)"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        dataKey="vendors"
                        fill="var(--color-vendors)"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ChartContainer>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Line Chart"
                  description="Weekly signal trends."
                >
                  <ChartContainer
                    config={chartConfig}
                    className="h-65 w-full"
                  >
                    <LineChart data={chartData} margin={{ top: 12, right: 12 }}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Line
                        type="monotone"
                        dataKey="risk"
                        stroke="var(--color-risk)"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="vendors"
                        stroke="var(--color-vendors)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ChartContainer>
                </ShowcaseCard>

                <ShowcaseCard
                  title="Pie Chart"
                  description="Risk distribution by tier."
                >
                  <ChartContainer
                    config={pieConfig}
                    className="h-65 w-full"
                  >
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={50}
                        outerRadius={80}
                        stroke="transparent"
                      >
                        {pieData.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </ShowcaseCard>
              </div>
            </section>
          </div>
        </div>
      </TooltipProvider>
    </section>
  )
}
