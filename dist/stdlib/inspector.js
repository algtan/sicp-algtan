"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areBreakpointsSet = exports.checkEditorBreakpoints = exports.manualToggleDebugger = exports.setBreakpointAtLine = exports.saveState = void 0;
exports.saveState = (context, it, scheduler) => {
    context.debugger.state.it = it;
    context.debugger.state.scheduler = scheduler;
};
exports.setBreakpointAtLine = (lines) => {
    breakpoints = lines;
};
exports.manualToggleDebugger = (context) => {
    context.runtime.break = true;
    return {
        status: 'suspended',
        scheduler: context.debugger.state.scheduler,
        it: context.debugger.state.it,
        context
    };
};
let breakpoints = [];
let moved = true;
let prevStoppedLine = -1;
exports.checkEditorBreakpoints = (context, node) => {
    if (node.loc) {
        const currentLine = node.loc.start.line - 1;
        if (!moved && currentLine !== prevStoppedLine) {
            moved = true;
        }
        if (context.runtime.debuggerOn && breakpoints[currentLine] !== undefined && moved) {
            moved = false;
            prevStoppedLine = currentLine;
            context.runtime.break = true;
        }
    }
};
exports.areBreakpointsSet = () => breakpoints.length > 0;
//# sourceMappingURL=inspector.js.map