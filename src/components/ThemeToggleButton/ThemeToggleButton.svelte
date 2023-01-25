<script lang="ts">
  import { SupportedThemes } from "../../enums";
  import { iconThemes } from "./iconThemes";

  let theme: SupportedThemes;

  theme =
    (localStorage.getItem("theme") as SupportedThemes) ?? SupportedThemes.DARK;

  const handleClick = () => {
    theme =
      theme === SupportedThemes.DARK
        ? SupportedThemes.LIGHT
        : SupportedThemes.DARK;
  };

  $: {
    if (theme === SupportedThemes.DARK) {
      document.documentElement.classList.add(SupportedThemes.DARK);
    } else {
      document.documentElement.classList.remove(SupportedThemes.DARK);
    }
    localStorage.setItem("theme", theme);
  }
</script>

<button
  class="p-1 hover:bg-gray-400 active:bg-gray-500 rounded-full w-min h-min"
  on:click={handleClick}
  aria-label="Toggle Light/Dark Mode"
>
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d={iconThemes[theme]} />
  </svg>
</button>
