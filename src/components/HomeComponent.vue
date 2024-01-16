<script setup lang="ts">
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import ListItem from '@/components/NavigationMenu/ListItem.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const defaultValue = 'item-1'


const components: { title: string; href: string; description: string }[] = [
  {
    title: 'OnecoreQBO',
    href: '/docs/primitives/alert-dialog',
    description:
      'Procore x QuickBooks.',
  },
  {
    title: 'OnecoreMYOB',
    href: '/docs/primitives/hover-card',
    description:
      'Procore x MYOB.',
  },
  {
    title: 'OnecoreXero',
    href: '/docs/primitives/progress',
    description:
      'Procore x Xero.',
  },
  {
    title: 'OnecoreOdoo',
    href: '/docs/primitives/scroll-area',
    description: 'Procore x Odoo.',
  },
]

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import { ref, onMounted } from 'vue'
import { columns } from "@/components/payments/columns"
import type { Payment } from '@/components/payments/columns'
import DataTable from "@/components/payments/DataTable.vue"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const date = ref<Date>()

import { Vue3Marquee } from 'vue3-marquee'

const data = ref<Payment[]>([])

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return generateDummyData(100)
}

function generateDummyData(count: number): Payment[] {
  const dummyData: Payment[] = [];

  for (let i = 0; i < count; i++) {
    const dataItem: Payment = {
      id: generateUniqueId(),
      amount: Math.floor(Math.random() * 1000) + 1,
      status: getRandomStatus(),
      email: `user${i}@example.com`,
    };

    dummyData.push(dataItem);
  }

  return dummyData;
}

function generateUniqueId(): string {
  // Implement your unique ID generation logic
  // This is a simple example; in a real scenario, you might want to use a library or more sophisticated approach
  return Math.random().toString(36).substr(2, 9);
}

function getRandomStatus(): 'pending' | 'processing' | 'success' | 'failed' {
  const statuses: Array<'pending' | 'processing' | 'success' | 'failed'> = ['pending', 'processing', 'success', 'failed'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

onMounted(async () => {
  data.value = await getData();
});
</script>
<template>
  <div>

    <div class="flex justify-between items-center my-auto py-2">
      <div>
        <p class="text-3xl text-primary font-semibold">INTERFY</p>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem class="self-center place-items-center justify-items-center">
            <NavigationMenuTrigger class="bg-transparent text-white data-[state=open]:underline data-[active]:underline">Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[300px] ">
                <ListItem href="/docs" title="About Us">
                  Australian-based company.
                </ListItem>
                <ListItem href="/docs/installation" title="Contact Us">
                  Anytime.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent text-white">Products</NavigationMenuTrigger>
            <NavigationMenuContent
              class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <li class="row-span-3">
                  <NavigationMenuLink as-child>
                    <a class="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-br from-primary via-foreground to-black text-white p-6 no-underline outline-none focus:shadow-md"
                      href="/">
                      <img src="https://companieslogo.com/img/orig/PCOR-33258035.png?t=1652256743" class="h-16 w-12">
                      <div class="mb-2 mt-4 text-lg font-medium">
                        Procore
                      </div>
                      <p class="text-sm leading-tight text-b">
                        Financial Integrations
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem v-for="component in components" :key="component.title" :title="component.title"
                  :href="component.href">
                  {{ component.description }}
                </ListItem>
              </ul>

            </NavigationMenuContent>

          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Demo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle class="text-2xl">Book a demo.</DialogTitle>
              <DialogDescription>
                Assisted by Construction Professionals.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className=" w-full flex  items-center gap-2">
                <div class="w-1/2">
                  <Label for="fname">First Name</Label>
                  <Input id="name" type="text" placeholder="First Name" required />
                </div>
                <div class="w-1/2">
                  <Label for="lname">Last Name</Label>
                  <Input id="name" type="text" placeholder="Last Name" required />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full grid items-center gap-2">
                <Label for="company">Company</Label>
                <Input id="company" type="text" placeholder="Company" required />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full grid items-center gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full grid items-center gap-2">
                <Label for="phone">Phone</Label>
                <Input id="phone" type="number" placeholder="Phone" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div class="w-full grid items-center gap-2">
                <Label for="email">Appointment Date</Label>
                <Popover>
                  <PopoverTrigger as-child>
                    <Button :variant="'outline'" :class="cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground',
                    )">
                      <CalendarIcon class="mr-2 h-4 w-4" />
                      <span>{{ date ? format(date, 'PPP - hh:mm') : "Pick a date" }}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-auto p-0">
                    <Calendar v-model="date" mode="datetime" />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div class="w-full grid items-center gap-2">
                <Label for="message">Additional Details</Label>
                <Textarea id="message" placeholder="Enter your additional detail you would like us to know." />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" class="mr-2">
                  Submit
                </Button>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <!-- <Button>Demo</Button> -->
      </div>
    </div>
  </div>
  <div class=" pt-16 sm-down:pt-8 pb-8 relative overflow-hidden">
    <div class="grid grid-cols-2 sm-down:grid-cols-1 gap-32 sm-down:gap-6">
      <div class=" md-down:mt-0 flex flex-col justify-between">
        <div class="my-auto">
          <h1 class="text-5xl text-primary">
            The Most Popular Integrations in <span class="underline underline-offset-2">Construction</span>.
          </h1>
          <div class="text-grey-7 text-xl mt-6">
            <p class="flex flex-wrap gap-x-1.5 text-secondary">
              Supercharge your construction.
            </p>
          </div>
          <div class="BlockHero__SwipeButton-sc-yt9ijs-6 Tlvzw">
            <div class="mt-8 sm-down:mb-8"><a class=" inline-block sm-down:w-full !opacity-100" href="/start">
              <Button class="flex py-6 bg-blue-500 hover:bg-blue-500/90"><p class=" text-white rounded text-xl py-4 px-5 w-full text-center ">Get started.</p></Button>
            </a></div>
          </div>
        </div>
        <div class="BlockHero__SwipeLogos-sc-yt9ijs-7 jRMtrx">
          <div class="mt-8">
            <div dir="ltr"
              class="rounded-2xl sm-down:hidden sm:rounded-8 flex justify-center h-fit max-h-32 overflow-hidden relative">
              <div class="absolute left-0 h-full w-30 bg-gradient-to-r from-black to-transparent z-10"></div>
              <Vue3Marquee class=" p-3 overflow-hidden" :duration="100"
              >
                <img
                    src="https://images.prismic.io/tryotter/7a30d6cd-eb4c-4670-bbf3-80736c617d5e_Ben+%26+Jerry.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Ben &amp; Jerry's logo"
                    class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12 ">
                <img
                    src="https://images.prismic.io/tryotter/ce64a7fe-aa37-496e-b068-434f280af617_Hardees+grayscale.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Hardee's logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/5fc97d40-6149-4bd7-9fae-a071d81c85ba_supa_white.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Supa logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/4b1e3efd-aefb-4c3d-a133-8b85ead7ffb5_Flynn+logo+white.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Flynn Restaurant Group logo"
                    class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/21404f85-4efd-4e1a-bb96-9027335fe78c_Steak_%27n_Shake_logo+1.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Steak n' Shake logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                
                <img
                    src="https://images.prismic.io/tryotter/7f5fa93f-edff-4349-b821-e24e2e2a517e_Cali+BBQ_white.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Cali BBQ logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://tryotter.cdn.prismic.io/tryotter/66590b2f-2d55-4266-81a4-c456d65e1664_MX_Dennys_logo.svg?fit=max"
                    alt="Denny's logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/63ded6c0-fb28-4cb5-ae12-e1188eeda1d2_dhani.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Dhanani Group logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                
                <img
                    src="https://images.prismic.io/tryotter/7a30d6cd-eb4c-4670-bbf3-80736c617d5e_Ben+%26+Jerry.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Ben &amp; Jerry's logo"
                    class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/ce64a7fe-aa37-496e-b068-434f280af617_Hardees+grayscale.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Hardee's logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] h-16 object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/5fc97d40-6149-4bd7-9fae-a071d81c85ba_supa_white.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Supa logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/4b1e3efd-aefb-4c3d-a133-8b85ead7ffb5_Flynn+logo+white.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Flynn Restaurant Group logo"
                    class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/21404f85-4efd-4e1a-bb96-9027335fe78c_Steak_%27n_Shake_logo+1.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Steak n' Shake logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] object-center opacity-[64%] mr-8 sm:mr-12">
                
                <img
                    src="https://images.prismic.io/tryotter/7f5fa93f-edff-4349-b821-e24e2e2a517e_Cali+BBQ_white.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Cali BBQ logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://tryotter.cdn.prismic.io/tryotter/66590b2f-2d55-4266-81a4-c456d65e1664_MX_Dennys_logo.svg?fit=max"
                    alt="Denny's logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] object-center opacity-[64%] mr-8 sm:mr-12">
                <img
                    src="https://images.prismic.io/tryotter/63ded6c0-fb28-4cb5-ae12-e1188eeda1d2_dhani.png?auto=compress%2Cformat&amp;fit=max"
                    alt="Dhanani Group logo" class="BlockHero__Image-sc-yt9ijs-3 object-contain max-h-[64px] object-center opacity-[64%] mr-8 sm:mr-12">
                
              </Vue3Marquee>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="relative">
        <div class="flex justify-end relative group">
          <div
            class="BlockHero__VideoContainer-sc-yt9ijs-11 iOGMmC cursor-pointer mb-12 sm:mb-0 sm:max-w-[80%] relative">
            <div type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1j:"
              data-state="closed"><video class="rounded-xl" loop="" playsinline="" autoplay="">
                <source
                  src="https://tryotter.cdn.prismic.io/tryotter/ddb83192-f1d6-43fc-9a1c-6fa0fa406233_ROUGH1+wo+corners.mp4"
                  type="video/mp4">
              </video>

            </div>
            <div class="BlockHero__HeroVideoCTAText-sc-yt9ijs-13 PzRCw HeroVideoCTA">
              <div
                class="pointer-events-none text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute font-medium text-2xl sm:text-xl md:h4 px-6 py-4 left-0 sm-down:left-0 sm-down:bottom-auto sm-down:top-0 bottom-0">
                <p>See how OneCore works →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="grid grid-cols-3 gap-4">
  <Card >
    <CardHeader class="text-center ">
      <CardTitle>
        <p class="text-3xl">1 million</p>
      </CardTitle>
      <CardDescription>transactions processed.</CardDescription>
    </CardHeader>
  </Card>
  <Card class="rounded-2xl">
    <CardHeader class="text-center">
      <CardTitle>
        <p class="text-3xl">300 </p>
      </CardTitle>
      <CardDescription>clients.</CardDescription>
    </CardHeader>
  </Card>
  <Card class="rounded-2xl">
    <CardHeader class="text-center">
      <CardTitle>
        <p class="text-3xl">1 million</p>
      </CardTitle>
      <CardDescription>transactions processed.</CardDescription>
    </CardHeader>
  </Card>



</div>

<div class="flex items-center space-x-2 mt-10">
  <Carousel class="w-full flex flex-col" :opts="{ loop: true, align: 'start' }">
    <div class="my-2">
      <CarouselPrevious class="relative p-3 bg-primary hover:bg-primary/90" />
      <CarouselNext class="relative p-3 bg-primary ml-1 hover:bg-primary/90" />
    </div>
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 6" :key="index" class="basis-1/2 lg:basis-1/4">
        <div class="p-1">
          <Card class="rounded-xl">
            <CardHeader class="text-center aspect-square flex flex-col justify-center items-center ">
            <CardTitle>
              <div class="bg-primary/20 rounded-xl p-3">
              <svg width="64" height="64" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </div>
            </CardTitle>
            <CardContent class="py-3 mt-2">
              <span class="text-xl text-primary 0 font-semibold">Head Contract Claims</span>
            </CardContent>
              <CardDescription>Seamless visibility of head contracts between project managers and accounting teams</CardDescription>
            </CardHeader>

          </Card>
        </div>
      </CarouselItem>

    </CarouselContent>

  </Carousel>
</div>

<div class="flex items-center space-x-2">
  <Carousel class="w-full flex flex-col" :opts="{ align: 'center' }">
    <div class="my-2">
      <CarouselPrevious class="absolute -left-5 z-10 top-1/2 -translate-y-1/2 p-3 border border-primary" />
      <CarouselNext class="absolute -right-5 z-10 top-1/2 -translate-y-1/2 p-3 border border-primary ml-1" />
    </div>
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 3" :key="index" class="basis-2/3 p-3">
        <div class="p-1">
          <Card class="rounded-xl grid grid-cols-8 gap-4 min-w-[720px] ">
            <CardContent class="col-span-3 bg-cover overflow-hidden p-6">
              <div class="h-full rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-full w-auto object-cover" />
              </div>
            </CardContent>
            <CardContent class="flex flex-col col-span-5 justify-between p-6">
              <div>
                <div class="text-5xl text-primary font-semibold mb-4">
                  <p>United Pacific</p>
                </div>
                <div class=" h5 mb-4 hanging-punctuation text-white/70">
                  <p>Our partnership [with Otter] has allowed us to effectively grow and manage our delivery business by
                    enabling us to aggregate all of the delivery partners into a single platform.</p>
                </div>
                <div class="text-primary text-xs">
                  <p>Travis W</p>
                </div>
                <div class="text-white/70 text-xs">
                  <p>Division Manager, United Pacific</p>
                </div>
                <div class="grid grid-cols-2 gap-1 border-t border-grey-10 my-4 pt-4">
                  <div class="flex gap-3">
                    <div class="text-xl text-primary min-w-[4.5ch]">44%</div>
                    <div class="text-small text-white/70 max-w-[16ch]">↑ weekly orders</div>
                  </div>
                  <div class="flex gap-3">
                    <div class="text-xl text-primary min-w-[4.5ch]">74%</div>
                    <div class="text-small text-white/70 max-w-[16ch]">↓ order issues</div>
                  </div>
                  <div class="flex gap-3">
                    <div class="text-xl text-primary min-w-[4.5ch]">22%</div>
                    <div class="text-small text-white/70 max-w-[16ch]">↑ average basket size</div>
                  </div>
                  <div class="flex gap-3">
                    <div class="text-xl text-primary min-w-[4.5ch]">25%</div>
                    <div class="text-small text-white/70 max-w-[16ch]">↓ canceled orders</div>
                  </div>
                </div>
              </div>
              <div>
                <a class="w-fit inline-block sm-down:w-full "
                  href="/blog/case-studies/delivering-sustainability-scalability-and-salads">
                  <button type="button"
                    class="inline-flex items-center border border-foreground rounded-xl py-3 px-5 whitespace-nowrap bg-black sm-down:w-full font-InterDisplay"
                    data-testid="csds-button">
                    <div class="text-primary">
                      <p class="text-left font-semibold">Read the case study
                      </p>
                    </div>
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>

    </CarouselContent>

  </Carousel>
</div>
<div class="py-10">
  <DataTable :columns="columns" :data="data" />
</div></template>

