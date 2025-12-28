const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetAnim
	];
};
self.C3_JsPropNameTable = [
	{Спрайт: 0},
	{Текст: 0},
	{Спрайт2: 0},
	{Спрайт3: 0},
	{Мышь: 0},
	{счет: 0}
];

self.InstanceType = {
	Спрайт: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Мышь: class extends self.IInstance {}
}