<template>
  <header className="flex items-center justify-between mb-16">
    <div className="bg-[#fc4994] rounded-full p-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 4L14.5 9.5L20 12L14.5 14.5L12 20L9.5 14.5L4 12L9.5 9.5L12 4Z" fill="white" />
      </svg>
    </div>

    <h1 className="text-[#282828] text-xl font-bold tracking-wide">ENGLISH</h1>

    <div className="flex items-center gap-2">
      <div className="flex">
        <Link
          href="#"
          className="rounded-full border border-[#7080e7] text-[#7080e7] px-4 py-1 text-sm"
        >
          SEARCH
        </Link>
        <Link
          href="#"
          className="rounded-full border border-[#7080e7] text-[#7080e7] px-4 py-1 text-sm mx-2"
        >
          UNITS
        </Link>
        <Link
          href="#"
          className="rounded-full border border-[#7080e7] text-[#7080e7] px-4 py-1 text-sm"
        >
          ABOUT US
        </Link>
      </div>

      <div className="flex items-center gap-2 ml-2">
        <button className="text-[#fc4994]">
          <Mail size="{20}" />
        </button>
        <div className="bg-[#282828] rounded-full p-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L14.5 9.5L20 12L14.5 14.5L12 20L9.5 14.5L4 12L9.5 9.5L12 4Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>

  <slot />
</template>
