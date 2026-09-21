#!/usr/bin/env python3
"""Derive the favicon, the iOS touch icon and the social card from the lockups.

Run after replacing the artwork in public/brand/:

    pip install pillow
    python3 scripts/generate-brand-assets.py
"""

from pathlib import Path

from PIL import Image

BRAND = Path(__file__).resolve().parent.parent / 'public' / 'brand'
GRADIENT_FROM = (0x4F, 0x20, 0x81)
GRADIENT_TO = (0x78, 0x53, 0xED)


def load(name: str) -> Image.Image:
    for suffix in ('.png', '.svg'):
        path = BRAND / f'{name}{suffix}'
        if path.exists():
            if suffix == '.svg':
                raise SystemExit(
                    f'{path.name} is SVG. Export it to PNG first, or convert it with '
                    'a tool that rasterises SVG, then rerun this script.'
                )
            return Image.open(path).convert('RGBA')
    raise SystemExit(f'missing {name}.png in {BRAND}')


def fit(img: Image.Image, box_w: int, box_h: int) -> Image.Image:
    scale = min(box_w / img.width, box_h / img.height)
    size = (max(1, round(img.width * scale)), max(1, round(img.height * scale)))
    return img.resize(size, Image.LANCZOS)


def centered(img: Image.Image, canvas: Image.Image) -> tuple[int, int]:
    return ((canvas.width - img.width) // 2, (canvas.height - img.height) // 2)


def main() -> None:
    icon = load('icon')
    stacked = load('logo-stacked')

    # Favicon: transparent square, mark inset so it does not touch the edges.
    favicon = Image.new('RGBA', (64, 64), (0, 0, 0, 0))
    mark = fit(icon, 52, 52)
    favicon.alpha_composite(mark, centered(mark, favicon))
    favicon.save(BRAND / 'favicon.png')

    # Touch icon: iOS composites on a solid tile, so give it a white one.
    touch = Image.new('RGBA', (180, 180), (255, 255, 255, 255))
    mark = fit(icon, 112, 112)
    touch.alpha_composite(mark, centered(mark, touch))
    touch.save(BRAND / 'apple-touch-icon.png')

    # Social card: stacked lockup on white above a quantum gradient band.
    width, height, band_height = 1200, 630, 26
    card = Image.new('RGBA', (width, height), (255, 255, 255, 255))
    lockup = fit(stacked, 520, 340)
    card.alpha_composite(lockup, ((width - lockup.width) // 2, (height - band_height - lockup.height) // 2))

    band = Image.new('RGBA', (width, band_height))
    for x in range(width):
        t = x / (width - 1)
        color = tuple(round(a + (b - a) * t) for a, b in zip(GRADIENT_FROM, GRADIENT_TO))
        band.paste(color + (255,), (x, 0, x + 1, band_height))
    card.alpha_composite(band, (0, height - band_height))
    card.convert('RGB').save(BRAND / 'og-image.png', optimize=True)

    print('wrote favicon.png, apple-touch-icon.png and og-image.png')


if __name__ == '__main__':
    main()
