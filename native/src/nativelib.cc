#define MAXAPI -fdeclspec(dllexport)

extern "C" {

    MAXAPI int add(int a,int b)
    {
        return a+b;
    }

}