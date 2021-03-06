interface Window {
    gl: WebGLRenderingContext;
}
declare var mat4:any;
declare var gl: WebGLRenderingContext;

interface WebGLRenderingContext {
    readonly TEXTURE_3D: number;
    readonly TEXTURE_WRAP_R: number;
    readonly RGB8: number;
    readonly RGBA32F: number;
    READ_FRAMEBUFFER: number;
    DRAW_FRAMEBUFFER: number;
    MAX_COLOR_ATTACHMENTS: number;
    MAX_DRAW_BUFFERS: number;
    FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: number;
    RENDERBUFFER_SAMPLES: number;
    COLOR: number;
    DEPTH_COMPONENT32F: number;
    COLOR_ATTACHMENT1: number;
    COLOR_ATTACHMENT2: number;
    COLOR_ATTACHMENT3: number;
    COLOR_ATTACHMENT4: number;
    COLOR_ATTACHMENT5: number;
    COLOR_ATTACHMENT6: number;
    COLOR_ATTACHMENT7: number;
    clearBufferfv(buffer, drawbuffer, values, srcOffset?): void;
    blitFramebuffer(srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter): void;
    readBuffer(attachment:number): void;
    drawBuffers(buffers: GLenum[]): void;
    createVertexArray():WebGLBuffer;
    bindVertexArray(vbo:WebGLBuffer):void;
    texImage3D(target, level, internalformat, width, height, depth, border, format, type, offset):void;
}

declare function fetch(...v:any[]);