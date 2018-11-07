#define MAX_API __declspec(dllexport)

typedef void (*CallBack)(int a, int b);

static CallBack _callback;

extern "C" {

	MAX_API int add(int a, int b)
	{
		return a + b;
	}

	MAX_API bool setCallback(CallBack callback)
	{
		_callback=callback;
		return true;
	}

	MAX_API void fireCallback(int a,int b)
	{
		_callback(a,b);
	}
}