import React from "react";

export default function RushTerminalEmulatorBlogPost() {
    return (
        <div>
            <h1>Rush Terminal Emulator</h1>
            <div>
                <p>

                    Introduction

                    Welcome to the journey of building Rush, a custom terminal emulator written in Rust and powered by OpenGL. Designed to combine high performance with modern design principles, Rush leverages GPU acceleration to provide smooth rendering and customizable features. In this blog post, I'll walk you through the motivation behind the project, key technical challenges, and how they were solved with code examples.

                    Why Build Rush?

                    There are many excellent terminal emulators out there, but most fall into one of two categories:

                    Feature-packed but bloated: These often trade off speed and simplicity for extensive functionality.

                    Lightweight but limited: These prioritize minimalism at the expense of advanced features or flexibility.

                    Rush aims to strike a balance by offering a fast, GPU-accelerated terminal emulator that retains a modern design while staying lightweight. Rust's safety guarantees and OpenGL's rendering power make this a perfect combination for the project.

                    Key Features

                    GPU-Accelerated Rendering: Achieves smooth rendering of text and graphics.

                    Monospaced Font Support: Ensures consistent alignment and appearance.

                    Custom Baseline Alignment: Properly aligns characters using font metrics.

                    Core Architecture

                    Rush is built around two primary components:

                    Font Rendering with FreeType: Handles glyph extraction and metrics.

                    OpenGL for Rendering: Draws text and background efficiently using shaders.

                    Here’s how these components work together:

                    Font Rendering with FreeType

                    FreeType provides the raw glyph data, including size, bearing, and advance metrics. This information is used to calculate the placement and alignment of each character within its designated cell. The Character struct encapsulates these properties:

                    <code>
                        struct Character {
                            texture_id: u32,        // OpenGL texture ID for the glyph
                        size: (i32, i32),       // Width and height of the glyph
                        bearing: (i32, i32),    // Offset from baseline to top-left corner
                        advance: i64,           // Horizontal advance to the next glyph
                        }
                    </code>

                    Textured Quad Rendering

                    Text is rendered by mapping glyph textures onto quads. The following function calculates the vertices for each glyph:

                    fn calculate_textured_quad_vertices(
                    cell: (usize, usize),
                    character: &Character,
                    window_width: f32,
                    window_height: f32,
) -> ([f32; 20], [u32; 6]) {
                        let(row, col) = cell;

                    // Cell dimensions
                    let cell_width = 2.0 / 80.0; // Assuming 80 columns
                    let cell_height = 2.0 / 24.0; // Assuming 24 rows

                    // Top-left corner of the cell
                    let cell_x = -1.0 + col as f32 * cell_width;
                    let cell_y = 1.0 - (row as f32 + 1.0) * cell_height;

                    // Baseline alignment
                    let baseline_offset = character.bearing.1 as f32 / window_height * 2.0;

                    let char_width = (character.size.0 as f32 / window_width * 2.0).min(cell_width);
                    let char_height = (character.size.1 as f32 / window_height * 2.0).min(cell_height);

                    let char_x = cell_x + (cell_width - char_width) / 2.0;
                    let char_y = cell_y + (cell_height - char_height) - baseline_offset;

                    let vertices = [
                    char_x, char_y, 0.0, 0.0, 0.0,
                    char_x + char_width, char_y, 0.0, 1.0, 0.0,
                    char_x, char_y - char_height, 0.0, 0.0, 1.0,
                    char_x + char_width, char_y - char_height, 0.0, 1.0, 1.0,
                    ];

                    let indices = [0, 1, 2, 1, 2, 3];

                    (vertices, indices)
}

                    This function calculates the quad vertices and aligns the glyph's baseline correctly within its cell.

                    Addressing Common Challenges

                    Baseline Alignment

                    One of the most critical aspects of rendering text is ensuring that the baseline of all characters aligns properly. Initially, glyphs like . and p would render incorrectly due to improper baseline calculation. This was resolved by incorporating the bearing.y metric:

                    let baseline_offset = character.bearing.1 as f32 / window_height * 2.0;

                    This adjustment ensures that glyphs align consistently, regardless of their size or shape.

                    Caps Lock and Shift Handling

                    Rush supports Caps Lock and Shift for proper text input handling. Using the GLFW library, we implemented key event handling to distinguish between uppercase and lowercase input:

                    match glfw::WindowEvent::Key(key, _, Action::Press | Action::Repeat, modifiers) {
                        glfw::Key::Backspace => {
                        println!("Backspace detected.");
                    buffer.pop();
    }
    key => {
                        let character = if modifiers.shift || modifiers.caps_lock {
                        key_to_capital_char(key)
                    } else {
                        key_to_lowercase_char(key)
                    };
                    buffer.push(character);
    }
}

                    This ensures that text input reflects the correct case based on the current state of Shift and Caps Lock.

                    Future Plans

                    Rush is still evolving, with exciting features on the roadmap:

                    Customizable Themes: Allow users to define colors and fonts.

                    UTF-8 Support: Extend compatibility with non-ASCII characters.

                    Improved Performance: Optimize rendering for high-resolution displays.

                    Conclusion

                    Rush is more than just a terminal emulator; it's a learning experience that combines the power of Rust and OpenGL to create something unique. From handling font metrics to aligning glyphs on a baseline, every step of the journey has been a rewarding challenge.

                    If you're interested in contributing or learning more, feel free to explore the project on GitHub (link coming soon!). Let me know your thoughts and suggestions — every piece of feedback helps make Rush better.

                </p>
            </div>
        </div>
    );
}
