<script setup lang="ts">
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Separator} from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

import { Vue3Marquee } from 'vue3-marquee'
import BoganLogo  from '@/assets/bogan.png'
import ConcordLogo  from '@/assets/concord-logo.png'
import EmaraldLogo  from '@/assets/emarald.png'


</script>

<template>
   <div class="pt-16 sm-down:pt-8 pb-8 relative overflow-hidden">
    <div class="flex flex-col w-full justify-center">
      <div class="md-down:mt-0 flex flex-col items-center justify-center ">
        <h1 class="text-5xl text-primary text-center font-bold leading-tight">
          The Most Popular Integrations in <span class="underline underline-offset-2 text-primary ">Construction</span>
        </h1>
        <div class="text-grey-7 text-2xl mt-3">
          <h3 class="flex flex-wrap gap-x-1.5 text-center font-semibold">
            Supercharge your financial workflow with OneCore.
          </h3>
        </div>
        <div class="mx-auto">
          <div class="mt-8 sm-down:mb-8"><a class=" inline-block sm-down:w-full !opacity-100" href="/start">
            <Button class="flex py-6 bg-primaryhover:bg-primary/90"><p class=" text-foreground rounded text-xl py-4 px-5 w-full text-center ">Book a demo</p></Button>
          </a></div>
      </div>
    </div>
    <div>
      <div class="relative mt-4">
        <div class="flex justify-center group">
          <div
            class="cursor-pointer sm:mb-0 relative">
            <div type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1j:"
              data-state="closed">
              <img
                src="https://images.unsplash.com/photo-1698397731622-614aff91b838?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-[580px] aspect-[16/9]" />
            </div>
            <div class="">
              <div
                class="pointer-events-none text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute font-medium text-2xl sm:text-xl md:h4 px-6 py-4 left-0 sm-down:left-0 sm-down:bottom-auto sm-down:top-0 bottom-0">
                <p>See how OneCore works →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" mt-4">
          <div class="mt-8">
            <div dir="ltr"
              class="rounded-2xl sm-down:hidden sm:rounded-8 flex justify-center h-fit max-h-32 overflow-hidden relative">
              <div class="absolute left-0 h-full w-30 bg-gradient-to-r from-black to-transparent z-10"></div>
              <Vue3Marquee class=" p-3 overflow-hidden" :duration="40"
              >
                <img
                    :src="BoganLogo"
                    alt="JM Bogan"
                    class=" object-contain max-h-[64px] h-16 object-center  opacity-[77%] mr-8 sm:mr-12 ">
                <img
                  src="https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/interfy1/wp-content/uploads/media/2023/02/Picture5-1.png"
                  alt="JM Bogan"
                  class=" object-contain max-h-[64px] h-16 object-center  opacity-[77%] mr-8 sm:mr-12 ">
                <img
                    src="https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/interfy1/wp-content/uploads/media/2022/02/TRINITYLANDSCAPEHIGHRES.png"
                    alt="Trinity Quality Interiors"
                    class=" object-contain max-h-[64px] h-16 object-center  opacity-[77%] mr-8 sm:mr-12 ">
                
                <img
                    src="https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/interfy1/wp-content/uploads/media/2021/05/Project-Coordination.png"
                    alt="Project Coordination"
                    class=" object-contain max-h-[64px] h-16 object-center opacity-[77%] mr-8 sm:mr-12 ">
                <img
                    :src="ConcordLogo"
                    alt="Concord Built Australia"
                    class=" object-contain max-h-[64px] h-16 object-center opacity-[77%] mr-8 sm:mr-12 ">
                <img
                    src="https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/interfy1/wp-content/uploads/media/2021/05/Mono-Constructions.png"
                    alt="Dhanani Group logo" class=" object-contain max-h-[64px] h-16 object-center opacity-[77%] mr-8 sm:mr-12">
                <img
                    :src="EmaraldLogo"
                    alt="Ben &amp; Jerry's logo"
                    class=" object-contain max-h-[64px] h-16 object-center opacity-[77%] mr-8 sm:mr-12">
                <img
                  src="https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/interfy1/wp-content/uploads/media/2021/08/ADR-logo.png"
                  alt="Dhanani Group logo" class=" object-contain max-h-[64px] h-16 object-center opacity-[77%] mr-8 sm:mr-12">
                <img
                  src="https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/interfy1/wp-content/uploads/media/2022/02/Marque-V2.png"
                  alt="MARQUE" class=" object-contain max-h-[64px] h-16 object-center opacity-[77%] mr-8 sm:mr-12">
              </Vue3Marquee>
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
              <div class="bg-primary/60 rounded-xl p-3">
                <VIcon name="la-file-contract-solid" class="size-8 md:size-16"/>
              </div>
            </CardTitle>
            <CardContent class="py-3 mt-2">
              <span class="text-xl text-foregrond 0 font-semibold">Head Contract Claims</span>
            </CardContent>
              <CardDescription>Seamless visibility of head contracts between project managers and accounting teams</CardDescription>
            </CardHeader>

          </Card>
        </div>
      </CarouselItem>

    </CarouselContent>

  </Carousel>
</div>
<div class="mt-10">
  <div class="text-center font-sans">
  <h1 class="text-4xl font-semibold text-foreground">Is OneCore right for me?</h1>
  <p class="text-foregrond/70 font-semibold text-xl mt-2">Operating Seamlessly</p>
  </div>

  <div class="flex items-center justify-center space-x-2 my-10">
    <Tabs default-value="account" class="relative w-full flex flex-col">
      <TabsList class="grid w-auto mx-auto grid-cols-3">
        <TabsTrigger value="account">
          Realtime Sync
        </TabsTrigger>
        <TabsTrigger value="password">
          Advanced Accounting Function
        </TabsTrigger>
        <TabsTrigger value="claims">
          Subcontract/PO Claims
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" >
        <Card class="rounded-xl grid grid-cols-12 gap-4 min-w-[720px] mx-auto ">
          <CardContent class="col-span-8 bg-cover overflow-hidden p-6">
            <div class="h-auto rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1698397731622-614aff91b838?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-full w-auto object-cover" />
            </div>
          </CardContent>
          <CardContent class="flex flex-col col-span-4 justify-between p-6">
            <div>
              <div class="text-5xl text-foreground font-semibold mb-4">
                <p>Realtime Sync</p>
              </div>
              <div class="h5 mb-4 hanging-punctuation text-foregrond/70">
                <p>Any transactions will be automatically synced between two platform.</p>
              </div>
              <div class="text-foregrond/70 text-xs">
                <p>Travis W</p>
              </div>
              <div class="text-foregrond text-xs">
                <p>Division Manager, United Pacific</p>
              </div>
              <Separator class="bg-foreground/70 my-4" />
              <div class="grid grid-cols-2 gap-1  pt-4">
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">44%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↑ weekly orders</div>
                </div>
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">74%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↓ order issues</div>
                </div>
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">22%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↑ average basket size</div>
                </div>
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">25%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↓ canceled orders</div>
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
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</div>
<div class="flex items-center space-x-2">
  <Carousel class="w-full flex flex-col" :opts="{ align: 'center' }">
    <div>
      <CarouselPrevious class="absolute -left-5 z-10 top-1/2 -translate-y-1/2 p-3 border border-primary bg-primary hover:bg-primary/95" />
      <CarouselNext class="absolute -right-5 z-10 top-1/2 -translate-y-1/2 p-3 border border-primary ml-1 bg-primary hover:bg-primary/95" />
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
              <div class="text-5xl text-foreground font-semibold mb-4">
                <p>United Pacific</p>
              </div>
              <div class="h5 mb-4 hanging-punctuation text-foregrond/70">
                <p>Our partnership [with Otter] has allowed us to effectively grow and manage our delivery business by
                  enabling us to aggregate all of the delivery partners into a single platform.</p>
              </div>
              <div class="text-foregrond/70 text-xs">
                <p>Travis W</p>
              </div>
              <div class="text-foregrond text-xs">
                <p>Division Manager, United Pacific</p>
              </div>
              <Separator class="bg-foreground/70 my-4" />
              <div class="grid grid-cols-2 gap-1  pt-4">
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">44%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↑ weekly orders</div>
                </div>
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">74%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↓ order issues</div>
                </div>
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">22%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↑ average basket size</div>
                </div>
                <div class="flex gap-3">
                  <div class="text-xl text-foregrond/70 underline decoration-primary min-w-[4.5ch]">25%</div>
                  <div class="text-small text-foreground max-w-[16ch]">↓ canceled orders</div>
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
</template>