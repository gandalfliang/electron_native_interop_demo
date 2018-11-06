project(electron_native_lib)

file(GLOB SRCS ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cc)

add_library(nativelib SHARED ${SRCS})