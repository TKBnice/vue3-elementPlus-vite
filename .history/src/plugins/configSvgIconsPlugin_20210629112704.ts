/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */
import type { Plugin } from 'vite'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

export function configSvgIconsPlugin(isBuild: boolean): Plugin {
  const svgIconsPlugin: Plugin = viteSvgIcons({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]'
  })
  return svgIconsPlugin
}
