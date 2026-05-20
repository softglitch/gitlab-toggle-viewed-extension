# GitLab Toggle Viewed

A Brave/Chrome extension that adds a "Toggle Viewed" button to GitLab merge request diff pages. One click toggles all the "file viewed" checkboxes.

## Installation

1. Open `brave://extensions` (or `chrome://extensions`)
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select this folder

## Usage

Navigate to any merge request's **Changes** tab (`/diffs`) on `gitlab.com`. A "Toggle Viewed" button appears in the top action bar alongside the existing buttons.

- **Click** — toggles all file-viewed checkboxes (checked become unchecked and vice versa).
- **Shift+Click** — marks all files as viewed without toggling already-viewed files back. The button text changes to "Mark All Viewed" while Shift is held.

## License

[GLWTS](./LICENSE)
